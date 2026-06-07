export default function Header() {
  return (
    <header className="w-full bg-[#006A4E] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#006A4E] flex items-center justify-center">
                <span className="text-white font-bold">BD</span>
              </div>
            </div>
          </div>

          {/* Center Title */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold tracking-wide">BANBEIS</h1>
            <p className="text-sm opacity-90">Ministry of Education</p>
            <p className="text-base font-semibold mt-1">UITRCE Office Distance Calculator</p>
            <p className="text-xs opacity-80 mt-0.5">Distance & Route Mapping System</p>
          </div>

          {/* Right Logo/Emblem */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#F42A41]">
                <div className="w-6 h-6 bg-[#F42A41] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
