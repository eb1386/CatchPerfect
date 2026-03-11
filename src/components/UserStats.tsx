const phases = [
  { label: 'Catch', score: 87, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  { label: 'Drive', score: 91, color: '#0ea5e9', bg: 'rgba(14, 165, 233, 0.1)' },
  { label: 'Recovery', score: 74, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
];

function ScoreBar({ label, score, color, bg }: { label: string; score: number; color: string; bg: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-zinc-400 w-20 flex-shrink-0">{label}</span>
      <div className="flex-1 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
      <div
        className="flex items-center justify-center w-10 h-7 rounded-md text-xs font-bold"
        style={{ backgroundColor: bg, color }}
      >
        {score}
      </div>
    </div>
  );
}

export default function UserStats() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-5">Technique Breakdown</h3>
        <div className="space-y-4">
          {phases.map((p) => (
            <ScoreBar key={p.label} {...p} />
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">Overall Score</span>
            <span className="text-2xl font-bold text-white font-mono">84</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-5">Progress Over Time</h3>
        <div className="space-y-3">
          {[
            { week: 'Week 1', score: 72 },
            { week: 'Week 2', score: 76 },
            { week: 'Week 3', score: 79 },
            { week: 'Week 4', score: 81 },
            { week: 'Week 5', score: 84 },
          ].map((w) => (
            <div key={w.week} className="flex items-center gap-4">
              <span className="text-xs text-zinc-500 w-16 flex-shrink-0 font-mono">{w.week}</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                  style={{ width: `${w.score}%` }}
                />
              </div>
              <span className="text-xs font-bold text-zinc-300 font-mono w-7">{w.score}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-sm text-zinc-400">5-Week Improvement</span>
          <span className="text-sm font-bold text-emerald-400">+12 points</span>
        </div>
      </div>
    </div>
  );
}
