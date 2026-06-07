/**
 * Calculate road distance between two coordinates
 * Uses Haversine formula for straight-line distance, then applies a routing factor
 * to simulate actual road distance (approximately 1.3-1.5x straight-line distance)
 */

export const calculateRoadDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  // Earth's radius in kilometers
  const R = 6371;

  // Convert degrees to radians
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;

  // Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightLineDistance = R * c;

  // Apply routing factor to simulate road distance
  // Bangladesh road network typically adds 30-50% to straight-line distance
  // We use 1.4 as a reasonable average for Bangladesh road conditions
  const routingFactor = 1.4;
  const roadDistance = straightLineDistance * routingFactor;

  return roadDistance;
};

/**
 * Format distance for display
 */
export const formatDistance = (km: number): string => {
  return km.toFixed(2);
};

/**
 * Calculate multiple distances from a point to multiple destinations
 */
export const calculateMultipleDistances = (
  origin: { lat: number; lng: number },
  destinations: Array<{ lat: number; lng: number }>
): number[] => {
  return destinations.map((dest) =>
    calculateRoadDistance(origin.lat, origin.lng, dest.lat, dest.lng)
  );
};
