import { MapPin, Calculator, Navigation, Building2, Map } from 'lucide-react';
import { banbeisOffices } from '../data/offices';

interface SidebarProps {
  office1: string;
  office2: string;
  setOffice1: (value: string) => void;
  setOffice2: (value: string) => void;
  onCalculate: () => void;
  onShowAllOffices: () => void;
  showingAllOffices: boolean;
  distances: {
    office1ToOffice2: number;
    headToOffice1: number;
    headToOffice2: number;
  } | null;
  isCalculating: boolean;
}

export default function Sidebar({
  office1,
  office2,
  setOffice1,
  setOffice2,
  onCalculate,
  onShowAllOffices,
  showingAllOffices,
  distances,
  isCalculating,
}: SidebarProps) {
  return (
    <div className="w-full lg:w-[30%] bg-gray-50 p-6 overflow-y-auto border-r border-gray-200">
      <div className="space-y-6">
        {/* Office Selection Card */}
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-[#006A4E]" />
            <h3 className="font-semibold text-gray-800">Select Offices</h3>
          </div>

          {/* Office 1 */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              Select Office 1
            </label>
            <select
              value={office1}
              onChange={(e) => setOffice1(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006A4E] bg-white text-sm"
            >
              <option value="">Choose office...</option>
              {banbeisOffices.map((office) => (
                <option key={office.value} value={office.value}>
                  {office.label}
                </option>
              ))}
            </select>
          </div>

          {/* Office 2 */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              Select Office 2
            </label>
            <select
              value={office2}
              onChange={(e) => setOffice2(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006A4E] bg-white text-sm"
            >
              <option value="">Choose office...</option>
              {banbeisOffices.map((office) => (
                <option key={office.value} value={office.value}>
                  {office.label}
                </option>
              ))}
            </select>
          </div>

          {/* Calculate Button */}
          <button
            onClick={onCalculate}
            disabled={!office1 || !office2 || isCalculating}
            className="w-full bg-[#006A4E] hover:bg-[#005438] text-white py-3 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-3"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Calculating Road Routes...
              </>
            ) : (
              <>
                <Calculator className="w-5 h-5" />
                Calculate Distance
              </>
            )}
          </button>

          {/* Show All Offices Button */}
          <button
            onClick={onShowAllOffices}
            className={`w-full py-3 rounded-md transition-colors flex items-center justify-center gap-2 border-2 ${
              showingAllOffices
                ? 'bg-[#F42A41] text-white border-[#F42A41] hover:bg-[#d41a34]'
                : 'bg-white text-[#006A4E] border-[#006A4E] hover:bg-gray-50'
            }`}
          >
            <Map className="w-5 h-5" />
            {showingAllOffices ? 'Hide All Offices' : 'All Offices - Show on Map'}
          </button>
        </div>

        {/* Head Office Info Card */}
        <div className="bg-gradient-to-br from-[#006A4E] to-[#005438] text-white rounded-lg shadow-md p-5">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-5 h-5" />
            <h3 className="font-semibold">BANBEIS Head Office</h3>
          </div>
          <p className="text-sm opacity-90 mb-2">
            Palashi-Nilkhet (near Palashi Mor), Dhaka
          </p>
          <a
            href="https://banbeis.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline opacity-80 hover:opacity-100 transition-opacity"
          >
            https://banbeis.gov.bd/
          </a>
        </div>

        {/* Results Cards */}
        {distances && (
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#006A4E]" />
                Distance Results
              </h3>
              <p className="text-xs text-gray-500 mt-1">📍 Actual road distances via routing</p>
            </div>

            {/* Office 1 to Office 2 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
              <p className="text-xs text-gray-600 mb-1">Office 1 ↔ Office 2</p>
              <p className="text-2xl font-bold text-gray-800">
                {distances.office1ToOffice2.toFixed(2)} <span className="text-sm">KM</span>
              </p>
              <div className="mt-2 flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-500">Blue Route</span>
              </div>
            </div>

            {/* Head to Office 1 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
              <p className="text-xs text-gray-600 mb-1">Head Office → Office 1</p>
              <p className="text-2xl font-bold text-gray-800">
                {distances.headToOffice1.toFixed(2)} <span className="text-sm">KM</span>
              </p>
              <div className="mt-2 flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-500">Green Route</span>
              </div>
            </div>

            {/* Head to Office 2 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-red-500">
              <p className="text-xs text-gray-600 mb-1">Head Office → Office 2</p>
              <p className="text-2xl font-bold text-gray-800">
                {distances.headToOffice2.toFixed(2)} <span className="text-sm">KM</span>
              </p>
              <div className="mt-2 flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs text-gray-500">Red Route</span>
              </div>
            </div>
          </div>
        )}

        {/* Bangladesh Watermark */}
        <div className="mt-8 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-auto">
            <path
              d="M100,20 L180,100 L100,180 L20,100 Z"
              fill="none"
              stroke="#006A4E"
              strokeWidth="2"
            />
            <circle cx="100" cy="100" r="50" fill="#006A4E" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
