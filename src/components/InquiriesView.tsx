import { useState, FormEvent } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export function InquiriesView() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset for demo
  };

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Inquiries & Registration</h1>
        <p className="text-slate-500 mt-1">Get in touch with us to start your driving journey.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-brand-900 text-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-brand-100">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  123 Driving Way<br />
                  Suite 400<br />
                  London, UK SW1A 1AA
                </p>
              </div>
              <div className="flex items-center gap-3 text-brand-100">
                <Phone className="w-5 h-5 shrink-0" />
                <p className="text-sm">+44 (0) 20 7123 4567</p>
              </div>
              <div className="flex items-center gap-3 text-brand-100">
                <Mail className="w-5 h-5 shrink-0" />
                <p className="text-sm">hello@drivetrack.pro</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-brand-800">
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <ul className="space-y-2 text-sm text-brand-200">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>08:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>09:00 - 14:00</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
            {isSubmitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Send className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Message Sent!</h2>
                <p className="text-slate-600 max-w-md">
                  Thank you for reaching out. A member of our team will get back to you within 24 hours to discuss your driving lessons.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="+44 7000 000000" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Inquiry Type</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none">
                    <option>New Student Registration</option>
                    <option>General Question</option>
                    <option>Pricing & Packages</option>
                    <option>Intensive Courses</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none" placeholder="How can we help you?" />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
