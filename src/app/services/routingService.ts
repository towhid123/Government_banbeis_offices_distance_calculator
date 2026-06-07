/**
 * Routing Service using OSRM (Open Source Routing Machine)
 * Provides actual road route paths and distances like Google Maps
 */

export interface RouteResult {
  distance: number; // in kilometers
  duration: number; // in seconds
  geometry: [number, number][]; // array of [lng, lat] coordinates for the route path
  success: boolean;
  error?: string;
}

/**
 * Get actual road route between two points using OSRM
 * OSRM uses OpenStreetMap data to calculate real driving routes
 */
export const getRoute = async (
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number
): Promise<RouteResult> => {
  try {
    // OSRM API endpoint (using public demo server)
    const url = `https://router.project-osrm.org/route/v1/driving/${startLng},${startLat};${endLng},${endLat}?overview=full&geometries=geojson`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`OSRM API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
      throw new Error('No route found');
    }

    const route = data.routes[0];

    return {
      distance: route.distance / 1000, // Convert meters to kilometers
      duration: route.duration,
      geometry: route.geometry.coordinates, // [lng, lat] pairs
      success: true,
    };
  } catch (error) {
    console.error('Routing error:', error);

    // Fallback to straight-line distance with routing factor if API fails
    const fallbackDistance = calculateFallbackDistance(startLat, startLng, endLat, endLng);

    return {
      distance: fallbackDistance,
      duration: 0,
      geometry: [[startLng, startLat], [endLng, endLat]], // straight line as fallback
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Get multiple routes in parallel
 */
export const getMultipleRoutes = async (
  routes: Array<{
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    name: string;
  }>
): Promise<Array<RouteResult & { name: string }>> => {
  const promises = routes.map(async (route) => {
    const result = await getRoute(route.startLat, route.startLng, route.endLat, route.endLng);
    return {
      ...result,
      name: route.name,
    };
  });

  return Promise.all(promises);
};

/**
 * Fallback distance calculation using Haversine formula
 */
const calculateFallbackDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightLineDistance = R * c;

  // Apply routing factor for Bangladesh road conditions
  return straightLineDistance * 1.4;
};

/**
 * Decode polyline string to coordinates (if needed for other routing services)
 */
export const decodePolyline = (encoded: string): [number, number][] => {
  const coords: [number, number][] = [];
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < encoded.length) {
    let b;
    let shift = 0;
    let result = 0;

    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;

    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    coords.push([lat / 1e5, lng / 1e5]);
  }

  return coords;
};
