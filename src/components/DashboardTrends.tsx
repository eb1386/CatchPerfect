import { TrendingUp, ArrowUp, ArrowDown, Minus } from 'lucide-react';

const weeklyScores = [
  { week: 'W1', overall: 68, catch: 65, drive: 72, recovery: 64 },
  { week: 'W2', overall: 72, catch: 70, drive: 76, recovery: 67 },
  { week: 'W3', overall: 74, catch: 73, drive: 78, recovery: 69 },
  { week: 'W4', overall: 76, catch: 76, drive: 80, recovery: 70 },
  { week: 'W5', overall: 79, catch: 80, drive: 82, recovery: 72 },
  { week: 'W6', overall: 81, catch: 82, drive: 85, recovery: 73 },
  { week: 'W7', overall: 84, catch: 84, drive: 88, recovery: 75 },
  { week: 'W8', overall: 87, catch: 87, drive: 91, recovery: 78 },
];

const phaseProgress = [
  {
    label: 'Catch',
    current: 87,
    start: 65,
    change: '+22',
    trend: 'up' as const,
    color: '#fec205',
    milestones: [
      { label: 'First session', week: 'W1', score: 65 },
      { label: 'Broke 80', week: 'W5', score: 80 },
      { label: 'Current best', week: 'W8', score: 87 },
    ],
  },
  {
    label: 'Drive',
    current: 91,
    start: 72,
    change: '+19',
    trend: 'up' as const,
    color: '#0ea5e9',
    milestones: [
      { label: 'First session', week: 'W1', score: 72 },
      { label: 'Broke 85', week: 'W6', score: 85 },
      { label: 'Current best', week: 'W8', score: 91 },
    ],
  },
  {
    label: 'Recovery',
    current: 78,
    start: 64,
    change: '+14',
    trend: 'up' as const,
    color: '#f59e0b',
    milestones: [
      { label: 'First session', week: 'W1', score: 64 },
      { label: 'Broke 70', week: 'W4', score: 70 },
      { label: 'Current', week: 'W8', score: 78 },
    ],
  },
];

const personalRecords = [
  { label: 'Best Overall Score', value: '87', date: 'Mar 9, 2026', change: '+3 from avg' },
  { label: 'Best Catch Score', value: '87', date: 'Mar 9, 2026', change: '+1 from avg' },
  { label: 'Best Drive Score', value: '91', date: 'Mar 9, 2026', change: '+2 from avg' },
  { label: 'Longest Streak', value: '5 days', date: 'Mar 9, 2026', change: '' },
  { label: 'Most Strokes (Session)', value: '901', date: 'Mar 5, 2026', change: '' },
  { label: 'Highest Avg Rate', value: '26 SPM', date: 'Mar 9, 2026', change: '' },
];

function ChartBar({ value, max, color, label }: { value: number; max: number; color: string; label: string }) {
  const height = (value / max) * 100;
  return (
    <div className="flex flex-col items-center gap-1.5 flex-1">
      <span className="text-xs font-mono text-zinc-400">{value}</span>
      <div className="w-full h-32 bg-zinc-800/50 rounded-md relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 rounded-md transition-all duration-700"
          style={{ height: `${height}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs text-zinc-600">{label}</span>
    </div>
  );
}

function TrendIcon({ trend }: { trend: 'up' | 'down' | 'flat' }) {
  if (trend === 'up') return <ArrowUp className="w-3.5 h-3.5 text-brand-400" />;
  if (trend === 'down') return <ArrowDown className="w-3.5 h-3.5 text-red-400" />;
  return <Minus className="w-3.5 h-3.5 text-amber-400" />;
}

export default function DashboardTrends() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Trends</h1>
        <p className="text-sm text-zinc-500">Track your long-term improvement across every phase of the stroke.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        {phaseProgress.map((phase) => (
          <div key={phase.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-zinc-400">{phase.label}</h3>
              <div className="flex items-center gap-1">
                <TrendIcon trend={phase.trend} />
                <span className="text-xs font-bold text-brand-400">{phase.change}</span>
              </div>
            </div>
            <div className="flex items-end gap-3 mb-4">
              <span className="text-3xl font-bold font-mono" style={{ color: phase.color }}>{phase.current}</span>
              <span className="text-sm text-zinc-600 pb-1">from {phase.start}</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-5">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${phase.current}%`, backgroundColor: phase.color }}
              />
            </div>
            <div className="space-y-2.5">
              {phase.milestones.map((m, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phase.color }} />
                    <span className="text-xs text-zinc-500">{m.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">{m.score}</span>
                    <span className="text-xs text-zinc-700">{m.week}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-brand-dark/40 bg-brand-dark/15 p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-5 h-5 text-brand-400" />
          <h2 className="text-lg font-bold text-white">Overall Score Over Time</h2>
        </div>
        <div className="flex items-end gap-2">
          {weeklyScores.map((w) => (
            <ChartBar key={w.week} value={w.overall} max={100} color="#fec205" label={w.week} />
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-3 gap-4">
          <div>
            <span className="text-xs text-zinc-600">Starting Score</span>
            <p className="text-lg font-bold text-white font-mono">68</p>
          </div>
          <div>
            <span className="text-xs text-zinc-600">Current Score</span>
            <p className="text-lg font-bold text-brand-400 font-mono">87</p>
          </div>
          <div>
            <span className="text-xs text-zinc-600">8-Week Gain</span>
            <p className="text-lg font-bold text-brand-400 font-mono">+19</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Phase Comparison</h3>
          <div className="flex items-end gap-3">
            {weeklyScores.map((w) => (
              <div key={w.week} className="flex-1 space-y-1">
                <div className="flex flex-col gap-0.5">
                  {[
                    { val: w.catch, color: '#fec205' },
                    { val: w.drive, color: '#0ea5e9' },
                    { val: w.recovery, color: '#f59e0b' },
                  ].map((bar, i) => (
                    <div key={i} className="w-full h-6 bg-zinc-800/50 rounded-sm relative overflow-hidden">
                      <div
                        className="absolute left-0 top-0 bottom-0 rounded-sm transition-all duration-500"
                        style={{ width: `${bar.val}%`, backgroundColor: bar.color }}
                      />
                    </div>
                  ))}
                </div>
                <span className="block text-center text-xs text-zinc-600">{w.week}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-6">
            {[
              { label: 'Catch', color: '#fec205' },
              { label: 'Drive', color: '#0ea5e9' },
              { label: 'Recovery', color: '#f59e0b' },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: l.color }} />
                <span className="text-xs text-zinc-500">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Personal Records</h3>
          <div className="space-y-0">
            {personalRecords.map((pr, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                <div>
                  <p className="text-sm text-zinc-300">{pr.label}</p>
                  <p className="text-xs text-zinc-600">{pr.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white font-mono">{pr.value}</p>
                  {pr.change && <p className="text-xs text-brand-400">{pr.change}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">AI Summary</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Over the past 8 weeks, your overall technique score has improved by 19 points (68 to 87).
          Your drive phase is your strongest area, consistently scoring above 85 since week 6.
          The catch phase has seen the most improvement (+22 points).
          Your recovery phase is trending upward (+14 points) but remains the biggest
          opportunity for further improvement. Focus on maintaining slide control in the
          final meters of each piece when fatigue sets in.
        </p>
      </div>
    </div>
  );
}
