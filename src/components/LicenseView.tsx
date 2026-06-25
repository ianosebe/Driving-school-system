import { useState, FormEvent } from 'react';
import { UploadCloud, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

export function LicenseView() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">License Application</h1>
        <p className="text-slate-500 mt-1">Apply for your provisional or full driving license easily.</p>
      </header>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />
        
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center gap-2 bg-slate-50 px-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
              step >= s ? 'bg-brand-600 border-brand-600 text-white' : 'bg-white border-slate-300 text-slate-400'
            }`}>
              {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
            </div>
            <span className={`text-xs font-medium ${step >= s ? 'text-slate-800' : 'text-slate-400'}`}>
              {s === 1 ? 'Personal Info' : s === 2 ? 'Documents' : 'Review'}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
        {step === 3 && (
           <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl flex flex-col items-center text-center space-y-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Application Submitted!</h2>
              <p className="text-slate-600 max-w-sm">Your license application has been successfully submitted to the DMV. You will receive an update via email within 5-7 business days.</p>
           </div>
        )}

        {step < 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                    <input type="date" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">License Type</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none">
                      <option>Provisional License</option>
                      <option>Full Driving License</option>
                    </select>
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">Home Address</label>
                    <textarea rows={2} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2">Document Upload</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    Please upload clear, legible copies of your identification. Accepted formats: JPG, PNG, PDF (Max 5MB each).
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-brand-400 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center group-hover:bg-brand-100 mb-3 transition-colors">
                      <UploadCloud className="w-6 h-6 text-brand-600" />
                    </div>
                    <p className="font-medium text-slate-700">Upload Proof of Identity</p>
                    <p className="text-xs text-slate-500 mt-1">Passport or Birth Certificate</p>
                  </div>
                  
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-brand-400 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center group-hover:bg-brand-100 mb-3 transition-colors">
                      <FileText className="w-6 h-6 text-brand-600" />
                    </div>
                    <p className="font-medium text-slate-700">Upload Proof of Address</p>
                    <p className="text-xs text-slate-500 mt-1">Utility bill or bank statement (within last 3 months)</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button 
                type="submit"
                className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-700 transition-colors flex items-center gap-2"
              >
                {step === 1 ? 'Continue to Documents' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
