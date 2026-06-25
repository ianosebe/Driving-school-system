import { useState, FormEvent } from 'react';
import { Calendar as CalendarIcon, Clock, UserCircle, CheckCircle2 } from 'lucide-react';

export function BookingView() {
  const [selectedDate, setSelectedDate] = useState<string>('2023-11-02');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string>('sarah');
  const [isBooked, setIsBooked] = useState(false);

  const times = ['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];
  const instructors = [
    { id: 'sarah', name: 'Sarah Jenkins', rating: '4.9', type: 'Automatic' },
    { id: 'mike', name: 'Mike Thompson', rating: '4.8', type: 'Manual' },
    { id: 'david', name: 'David Chen', rating: '4.9', type: 'Manual & Auto' },
  ];

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && selectedInstructor) {
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 3000); // Reset for demo purposes
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Book a Lesson</h1>
        <p className="text-slate-500 mt-1">Schedule your next practical driving session.</p>
      </header>

      {isBooked && (
        <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl flex items-center gap-3 border border-emerald-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <p className="font-medium">Lesson successfully booked! A confirmation has been sent to your email.</p>
        </div>
      )}

      <form onSubmit={handleBooking} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-8">
        
        {/* Instructor Selection */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <UserCircle className="w-5 h-5 text-brand-600" />
            Select Instructor
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {instructors.map((inst) => (
              <label 
                key={inst.id}
                className={`relative flex flex-col p-4 cursor-pointer rounded-lg border-2 transition-all ${
                  selectedInstructor === inst.id 
                    ? 'border-brand-600 bg-brand-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input 
                  type="radio" 
                  name="instructor" 
                  className="sr-only"
                  checked={selectedInstructor === inst.id}
                  onChange={() => setSelectedInstructor(inst.id)}
                />
                <span className="font-semibold text-slate-900">{inst.name}</span>
                <span className="text-sm text-slate-500 mt-1">{inst.type}</span>
                <span className="text-xs font-medium text-amber-600 mt-2 flex items-center gap-1">
                  ★ {inst.rating}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-brand-600" />
            Choose Date
          </h2>
          <input 
            type="date" 
            className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow text-slate-700"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        {/* Time Selection */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-600" />
            Select Time
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-lg text-sm font-medium transition-colors border ${
                  selectedTime === time
                    ? 'bg-brand-600 text-white border-brand-600 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button 
            type="submit"
            disabled={!selectedTime || !selectedDate || !selectedInstructor}
            className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}
