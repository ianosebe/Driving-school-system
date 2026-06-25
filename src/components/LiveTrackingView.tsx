import { useEffect, useState } from 'react';
import { Map, Navigation, Phone, MessageCircle, MapPin } from 'lucide-react';

export function LiveTrackingView() {
  const [progress, setProgress] = useState(0);

  // Simulate vehicle movement
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; // Loop for demo
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 h-full flex flex-col">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Live Tracking</h1>
        <p className="text-slate-500 mt-1">Track your instructor's arrival in real-time.</p>
      </header>

      <div className="flex-1 bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-inner min-h-[400px]">
        {/* Simulated Map Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#3b82f6 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}
        />

        {/* Status Card Overlay */}
        <div className="absolute top-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white p-5 rounded-xl shadow-lg border border-slate-100 z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Arriving Soon</p>
              <h2 className="text-xl font-bold text-slate-900 mt-1">4 mins</h2>
              <p className="text-sm text-slate-500">1.2 miles away</p>
            </div>
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
               <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Sarah" alt="Instructor" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-4 mb-4">
            <h3 className="font-semibold text-slate-800">Sarah Jenkins</h3>
            <p className="text-sm text-slate-500 mt-0.5">Toyota Yaris • Blue • AB21 CDE</p>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Message
            </button>
          </div>
        </div>

        {/* Simulated Route Line */}
        <div className="absolute top-1/2 left-[20%] right-[20%] h-1.5 bg-slate-200 rounded-full -translate-y-1/2">
          {/* Progress fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-brand-500 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
          
          {/* Instructor Marker (Car) */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -ml-3 w-6 h-6 bg-white border-2 border-brand-600 rounded-full shadow-md flex items-center justify-center transition-all duration-100 ease-linear z-10"
            style={{ left: `${progress}%` }}
          >
            <Navigation className="w-3 h-3 text-brand-600 rotate-90" />
          </div>

          {/* Start / End Points */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-slate-400 rounded-full border-2 border-white shadow-sm" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
             <MapPin className="w-3 h-3 text-white" />
          </div>
        </div>
        
        {/* Labels for start/end */}
        <div className="absolute top-1/2 mt-4 left-[20%] -translate-x-1/2 text-xs font-semibold text-slate-500">Instructor</div>
        <div className="absolute top-1/2 mt-4 right-[20%] translate-x-1/2 text-xs font-semibold text-slate-500">Pickup Location</div>
      </div>
    </div>
  );
}
