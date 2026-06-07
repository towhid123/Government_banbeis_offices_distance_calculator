import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import Footer from './components/Footer';
import { banbeisOffices, headOfficeCoords } from './data/offices';
import { getMultipleRoutes, RouteResult } from './services/routingService';

interface RouteData {
  distance: number;
  geometry: [number, number][];
}

export default function App() {
  const [office1, setOffice1] = useState('');
  const [office2, setOffice2] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAllOffices, setShowAllOffices] = useState(false);
  const [distances, setDistances] = useState<{
    office1ToOffice2: number;
    headToOffice1: number;
    headToOffice2: number;
  } | null>(null);
  const [office1Coords, setOffice1Coords] = useState<{ lat: number; lng: number; name: string } | null>(null);
  const [office2Coords, setOffice2Coords] = useState<{ lat: number; lng: number; name: string } | null>(null);
  const [routeGeometries, setRouteGeometries] = useState<{
    office1ToOffice2: [number, number][];
    headToOffice1: [number, number][];
    headToOffice2: [number, number][];
  } | null>(null);

  const handleCalculate = async () => {
    if (!office1 || !office2) return;

    setIsCalculating(true);
    setShowAllOffices(false); // Hide all offices when calculating specific routes

    const office1Data = banbeisOffices.find((o) => o.value === office1);
    const office2Data = banbeisOffices.find((o) => o.value === office2);

    if (office1Data && office2Data) {
      setOffice1Coords({ lat: office1Data.lat, lng: office1Data.lng, name: office1Data.label });
      setOffice2Coords({ lat: office2Data.lat, lng: office2Data.lng, name: office2Data.label });

      try {
        // Calculate all three routes using actual road paths
        const routes = await getMultipleRoutes([
          {
            startLat: office1Data.lat,
            startLng: office1Data.lng,
            endLat: office2Data.lat,
            endLng: office2Data.lng,
            name: 'office1ToOffice2',
          },
          {
            startLat: headOfficeCoords.lat,
            startLng: headOfficeCoords.lng,
            endLat: office1Data.lat,
            endLng: office1Data.lng,
            name: 'headToOffice1',
          },
          {
            startLat: headOfficeCoords.lat,
            startLng: headOfficeCoords.lng,
            endLat: office2Data.lat,
            endLng: office2Data.lng,
            name: 'headToOffice2',
          },
        ]);

        // Extract distances
        const distanceMap: { [key: string]: number } = {};
        const geometryMap: { [key: string]: [number, number][] } = {};

        routes.forEach((route) => {
          distanceMap[route.name] = route.distance;
          geometryMap[route.name] = route.geometry;
        });

        setDistances({
          office1ToOffice2: distanceMap['office1ToOffice2'],
          headToOffice1: distanceMap['headToOffice1'],
          headToOffice2: distanceMap['headToOffice2'],
        });

        setRouteGeometries({
          office1ToOffice2: geometryMap['office1ToOffice2'],
          headToOffice1: geometryMap['headToOffice1'],
          headToOffice2: geometryMap['headToOffice2'],
        });
      } catch (error) {
        console.error('Error calculating routes:', error);
        // Keep the UI showing loading state briefly before clearing
      }

      setIsCalculating(false);
    }
  };

  const handleShowAllOffices = () => {
    setShowAllOffices(!showAllOffices);
    if (!showAllOffices) {
      // Clear selected offices when showing all
      setOffice1Coords(null);
      setOffice2Coords(null);
      setDistances(null);
      setRouteGeometries(null);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <Sidebar
          office1={office1}
          office2={office2}
          setOffice1={setOffice1}
          setOffice2={setOffice2}
          onCalculate={handleCalculate}
          onShowAllOffices={handleShowAllOffices}
          showingAllOffices={showAllOffices}
          distances={distances}
          isCalculating={isCalculating}
        />
        <div className="flex-1 bg-white">
          <MapView
            office1Coords={office1Coords}
            office2Coords={office2Coords}
            showAllOffices={showAllOffices}
            routeGeometries={routeGeometries}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}