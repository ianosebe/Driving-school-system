import { useState } from 'react';
import { ViewState } from './types';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { BookingView } from './components/BookingView';
import { LiveTrackingView } from './components/LiveTrackingView';
import { LicenseView } from './components/LicenseView';
import { InquiriesView } from './components/InquiriesView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Navigation Sidebar */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto h-full">
          {currentView === 'dashboard' && <DashboardView />}
          {currentView === 'booking' && <BookingView />}
          {currentView === 'tracking' && <LiveTrackingView />}
          {currentView === 'license' && <LicenseView />}
          {currentView === 'inquiries' && <InquiriesView />}
        </div>
      </main>
    </div>
  );
}
