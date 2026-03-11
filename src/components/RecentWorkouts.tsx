import { Activity, ChevronRight } from 'lucide-react';

const workouts = [
  {
    date: 'Mar 9, 2026',
    time: '6:30 AM',
    duration: '42:15',
    strokes: 847,
    score: 87,
    change: '+3',
    label: 'Morning Row',
  },
  {
    date: 'Mar 7, 2026',
    time: '7:00 AM',
    duration: '38:42',
    strokes: 762,
    score: 84,
    change: '+1',
    label: 'Steady State',
  },
  {
    date: 'Mar 5, 2026',
    time: '6:15 AM',
    duration: '45:08',
    strokes: 901,
    score: 83,
    change: '+2',
    label: 'Technique Focus',
  },
  {
    date: 'Mar 3, 2026',
    time: '7:30 AM',
    duration: '35:20',
    strokes: 688,
    score: 81,
    change: '-1',
    label: 'Short Session',
  },
];

function getScoreColor(score: number) {
  if (score >= 85) return 'text-emerald-400';
  if (score >= 80) return 'text-sky-400';
  return 'text-amber-400';
}

function getScoreBg(score: number) {
  if (score >= 85) return 'bg-emerald-500/10';
  if (score >= 80) return 'bg-sky-500/10';
  return 'bg-amber-500/10';
}

export default function RecentWorkouts() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-white">Recent Workouts</h2>
        <button className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">View All</button>
      </div>
      <div className="space-y-3">
        {workouts.map((w, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all text-left group"
          >
            <div className={`w-10 h-10 rounded-xl ${getScoreBg(w.score)} flex items-center justify-center flex-shrink-0`}>
              <Activity className={`w-5 h-5 ${getScoreColor(w.score)}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">{w.label}</span>
                <span className="text-xs text-zinc-600">{w.date}</span>
              </div>
              <div className="flex items-center gap-4 mt-1 text-xs text-zinc-500">
                <span>{w.time}</span>
                <span>{w.duration}</span>
                <span>{w.strokes} strokes</span>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="text-right">
                <div className={`text-lg font-bold font-mono ${getScoreColor(w.score)}`}>{w.score}</div>
                <div className={`text-xs font-medium ${w.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {w.change}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
