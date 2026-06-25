import {
  LayoutDashboard,
  CalendarDays,
  MapPin,
  IdCard,
  MessageSquare,
  LogOut,
  Car
} from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems: { id: ViewState; label: string; icon: any }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'booking', label: 'Book Lesson', icon: CalendarDays },
    { id: 'tracking', label: 'Live Tracking', icon: MapPin },
    { id: 'license', label: 'License App', icon: IdCard },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
          <Car className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-900">DriveTrack</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium overflow-hidden ${
                isActive
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-600" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
          <LogOut className="w-5 h-5 text-slate-400" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
