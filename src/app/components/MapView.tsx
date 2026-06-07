import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { banbeisOffices, headOfficeCoords } from '../data/offices';

interface MapViewProps {
  office1Coords: { lat: number; lng: number; name: string } | null;
  office2Coords: { lat: number; lng: number; name: string } | null;
  showAllOffices: boolean;
  routeGeometries: {
    office1ToOffice2: [number, number][];
    headToOffice1: [number, number][];
    headToOffice2: [number, number][];
  } | null;
}

export default function MapView({ office1Coords, office2Coords, showAllOffices, routeGeometries }: MapViewProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView([23.8103, 90.4125], 7);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icons
    const createIcon = (color: string) => {
      return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
    };

    const headIcon = createIcon('#F42A41');
    const office1Icon = createIcon('#3B82F6');
    const office2Icon = createIcon('#10B981');

    // Add head office marker
    L.marker([headOfficeCoords.lat, headOfficeCoords.lng], { icon: headIcon })
      .addTo(map)
      .bindPopup(`<b>${headOfficeCoords.name}</b><br>Palashi-Nilkhet, Dhaka`);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // Clear existing layers except base layer and head office
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // Custom marker icons
    const createIcon = (color: string, size: number = 24) => {
      return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: ${size}px; height: ${size}px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });
    };

    const headIcon = createIcon('#F42A41', 32);
    const office1Icon = createIcon('#3B82F6');
    const office2Icon = createIcon('#10B981');
    const allOfficeIcon = createIcon('#9333EA', 16);

    // Re-add head office marker
    L.marker([headOfficeCoords.lat, headOfficeCoords.lng], { icon: headIcon })
      .addTo(map)
      .bindPopup(`<b>${headOfficeCoords.name}</b><br>${headOfficeCoords.address}`);

    const bounds: L.LatLngExpression[] = [[headOfficeCoords.lat, headOfficeCoords.lng]];

    // Show all offices if button is clicked
    if (showAllOffices) {
      // Color coding by division for better visualization
      const divisionColors: { [key: string]: string } = {
        'Dhaka': '#3B82F6',      // Blue
        'Chattogram': '#10B981', // Green
        'Rajshahi': '#F59E0B',   // Amber
        'Khulna': '#8B5CF6',     // Violet
        'Barisal': '#EC4899',    // Pink
        'Sylhet': '#06B6D4',     // Cyan
        'Rangpur': '#EF4444',    // Red
        'Mymensingh': '#14B8A6'  // Teal
      };

      banbeisOffices.forEach((office) => {
        const color = divisionColors[office.division] || '#9333EA';
        const officeIcon = createIcon(color, 14);

        L.marker([office.lat, office.lng], { icon: officeIcon })
          .addTo(map)
          .bindPopup(`
            <div style="min-width: 150px;">
              <b style="color: ${color}; font-size: 14px;">${office.label}</b><br>
              <span style="font-size: 12px;">📍 ${office.division} Division</span><br>
              <span style="font-size: 11px; color: #666;">District: ${office.district}</span><br>
              <span style="font-size: 11px; color: #666;">Thana: ${office.thana}</span>
            </div>
          `);
        bounds.push([office.lat, office.lng]);
      });
    } else {
      // Show selected offices and routes
      if (office1Coords) {
        L.marker([office1Coords.lat, office1Coords.lng], { icon: office1Icon })
          .addTo(map)
          .bindPopup(`<b>Office 1: ${office1Coords.name}</b>`);
        bounds.push([office1Coords.lat, office1Coords.lng]);

        // Green road path from head to office 1
        if (routeGeometries?.headToOffice1 && routeGeometries.headToOffice1.length > 0) {
          const coords = routeGeometries.headToOffice1.map(([lng, lat]) => [lat, lng] as [number, number]);
          L.polyline(coords, {
            color: '#10B981',
            weight: 4,
            opacity: 0.8,
            dashArray: '10, 10',
          }).addTo(map);
        }
      }

      if (office2Coords) {
        L.marker([office2Coords.lat, office2Coords.lng], { icon: office2Icon })
          .addTo(map)
          .bindPopup(`<b>Office 2: ${office2Coords.name}</b>`);
        bounds.push([office2Coords.lat, office2Coords.lng]);

        // Red road path from head to office 2
        if (routeGeometries?.headToOffice2 && routeGeometries.headToOffice2.length > 0) {
          const coords = routeGeometries.headToOffice2.map(([lng, lat]) => [lat, lng] as [number, number]);
          L.polyline(coords, {
            color: '#EF4444',
            weight: 4,
            opacity: 0.8,
            dashArray: '10, 10',
          }).addTo(map);
        }
      }

      if (office1Coords && office2Coords) {
        // Blue road path between office 1 and office 2
        if (routeGeometries?.office1ToOffice2 && routeGeometries.office1ToOffice2.length > 0) {
          const coords = routeGeometries.office1ToOffice2.map(([lng, lat]) => [lat, lng] as [number, number]);
          L.polyline(coords, {
            color: '#3B82F6',
            weight: 5,
            opacity: 0.9,
          }).addTo(map);
        }
      }
    }

    // Fit bounds to show all markers
    if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: showAllOffices ? 7 : 10 });
    }
  }, [office1Coords, office2Coords, showAllOffices, routeGeometries]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="w-full h-full rounded-lg shadow-inner" />

      {/* Legend Card */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-[1000]">
        <h4 className="font-semibold text-sm mb-3 text-gray-800">Legend</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#F42A41] rounded-full border-2 border-white"></div>
            <span>Head Office</span>
          </div>
          {showAllOffices ? (
            <>
              <div className="mb-2 pb-2 border-b">
                <span className="font-medium">Total Offices: {banbeisOffices.length}</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full border border-white"></div>
                  <span>Dhaka</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                  <span>Chattogram</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full border border-white"></div>
                  <span>Rajshahi</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded-full border border-white"></div>
                  <span>Khulna</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full border border-white"></div>
                  <span>Barisal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full border border-white"></div>
                  <span>Sylhet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-white"></div>
                  <span>Rangpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full border border-white"></div>
                  <span>Mymensingh</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <span>Office 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                <span>Office 2</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-blue-500"></div>
                  <span>Office 1 ↔ Office 2</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-0.5 bg-green-500 border-dashed"></div>
                  <span>Head → Office 1</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-0.5 bg-red-500 border-dashed"></div>
                  <span>Head → Office 2</span>
                </div>
              </div>
              <div className="border-t pt-2 mt-2 text-xs text-gray-500">
                <p>🛣️ Routes follow actual roads</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Map Controls Info */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-3 z-[1000] text-xs text-gray-600">
        <p>🗺️ Interactive Map | Use mouse to zoom and pan</p>
        {showAllOffices && (
          <p className="mt-1 text-green-600 font-medium">✓ Showing all {banbeisOffices.length} UITRCE offices</p>
        )}
      </div>

      {/* Office Count by Division - Only show when all offices are displayed */}
      {showAllOffices && (
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 z-[1000] max-w-xs">
          <h4 className="font-semibold text-sm mb-2 text-gray-800 flex items-center gap-2">
            📊 Division Statistics
          </h4>
          <div className="space-y-1 text-xs">
            {[
              { name: 'Dhaka', color: '#3B82F6' },
              { name: 'Chattogram', color: '#10B981' },
              { name: 'Rajshahi', color: '#F59E0B' },
              { name: 'Khulna', color: '#8B5CF6' },
              { name: 'Barisal', color: '#EC4899' },
              { name: 'Sylhet', color: '#06B6D4' },
              { name: 'Rangpur', color: '#EF4444' },
              { name: 'Mymensingh', color: '#14B8A6' },
            ].map((div) => {
              const count = banbeisOffices.filter((o) => o.division === div.name).length;
              return (
                <div key={div.name} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full border border-white"
                      style={{ backgroundColor: div.color }}
                    ></div>
                    <span>{div.name}</span>
                  </div>
                  <span className="font-semibold text-gray-700">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
