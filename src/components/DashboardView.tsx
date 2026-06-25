import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { FileCheck, BookOpen, AlertCircle } from 'lucide-react';
import { SkillProgress, Report } from '../types';

const skillsData: SkillProgress[] = [
  { skill: 'Steering', score: 85, fullMark: 100 },
  { skill: 'Parking', score: 65, fullMark: 100 },
  { skill: 'Mirrors', score: 90, fullMark: 100 },
  { skill: 'Speed Control', score: 80, fullMark: 100 },
  { skill: 'Braking', score: 75, fullMark: 100 },
  { skill: 'Signals', score: 95, fullMark: 100 },
];

const recentReports: Report[] = [
  {
    id: '1',
    date: 'Oct 24, 2023',
    title: 'Lesson 8: Parallel Parking',
    status: 'needs-work',
    notes: 'Good spatial awareness, but needs to check blind spots more consistently before reversing.',
  },
  {
    id: '2',
    date: 'Oct 20, 2023',
    title: 'Lesson 7: Highway Merging',
    status: 'excellent',
    notes: 'Perfect execution of merging. Maintained appropriate speed and checked mirrors perfectly.',
  },
  {
    id: '3',
    date: 'Oct 15, 2023',
    title: 'Lesson 6: Roundabouts',
    status: 'passed',
    notes: 'Understands right of way. Needs slightly smoother braking on approach.',
  },
];

export function DashboardView() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Alex!</h1>
        <p className="text-slate-500 mt-1">Here is your current driving progress overview.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Theory Progress Card */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm col-span-1 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Theory Test Readiness</h2>
            <div className="bg-blue-50 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-brand-600" />
            </div>
          </div>
          <div className="mb-2 flex justify-between items-end">
            <span className="text-3xl font-bold text-slate-900">82%</span>
            <span className="text-sm text-slate-500 font-medium mb-1">Target: 86%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-brand-500 h-2.5 rounded-full" style={{ width: '82%' }}></div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            You're almost ready! Focus on "Road Signs" and "Hazard Perception" modules.
          </p>
        </div>

        {/* Next Lesson Card */}
        <div className="bg-brand-600 p-6 rounded-xl border border-brand-700 shadow-sm text-white flex flex-col justify-between">
          <div>
            <h2 className="text-brand-100 font-medium mb-1">Next Lesson</h2>
            <p className="text-2xl font-bold">Tomorrow, 10:00 AM</p>
            <p className="text-brand-200 text-sm mt-1">Instructor: Sarah Jenkins</p>
          </div>
          <div className="mt-6 flex gap-2">
            <button className="bg-white text-brand-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-50 transition-colors w-full">
              Reschedule
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Practical Skills Radar */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Practical Skills Evaluation</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="score"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Automated Progress Reports */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Recent Reports</h2>
            <button className="text-sm font-medium text-brand-600 hover:text-brand-700">View All</button>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-slate-900">{report.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{report.date}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-md flex items-center gap-1 ${
                    report.status === 'excellent' ? 'bg-emerald-100 text-emerald-700' :
                    report.status === 'passed' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {report.status === 'needs-work' && <AlertCircle className="w-3 h-3" />}
                    {report.status === 'excellent' && <FileCheck className="w-3 h-3" />}
                    {report.status === 'passed' && <FileCheck className="w-3 h-3" />}
                    {report.status === 'needs-work' ? 'Needs Work' : 
                     report.status === 'excellent' ? 'Excellent' : 'Passed'}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{report.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
