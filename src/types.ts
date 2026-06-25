export type ViewState = 'dashboard' | 'booking' | 'tracking' | 'license' | 'inquiries';

export interface SkillProgress {
  skill: string;
  score: number;
  fullMark: number;
}

export interface Report {
  id: string;
  date: string;
  title: string;
  status: 'passed' | 'needs-work' | 'excellent';
  notes: string;
}

export interface Lesson {
  id: string;
  date: string;
  time: string;
  instructor: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}
