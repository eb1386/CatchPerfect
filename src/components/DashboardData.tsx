import { useState } from 'react';
import { Activity, ChevronRight, Clock, Zap, Timer, Target } from 'lucide-react';

const sessions = [
  {
    id: 1,
    label: 'Morning Row',
    date: 'Mar 9, 2026',
    time: '6:30 AM',
    duration: '42:15',
    strokes: 847,
    overallScore: 87,
    avgRate: 26,
    distance: '8.2 km',
    catchScore: 89,
    driveScore: 91,
    recoveryScore: 78,
    metrics: [
      { label: 'Blade Entry Angle', value: '43 deg', status: 'good' },
      { label: 'Catch Timing', value: '0.11s', status: 'great' },
      { label: 'Leg Drive Power', value: '348W', status: 'great' },
      { label: 'Sequencing', value: '95%', status: 'great' },
      { label: 'Recovery Speed', value: 'Controlled', status: 'good' },
      { label: 'Slide Control', value: '82%', status: 'good' },
      { label: 'Body Prep Timing', value: 'On time', status: 'great' },
      { label: 'Handle Height', value: 'Consistent', status: 'great' },
    ],
    insight: 'Strong session overall. Catch timing has improved significantly from last week. Focus on maintaining slide control during the last 500m when fatigue sets in.',
  },
  {
    id: 2,
    label: 'Steady State',
    date: 'Mar 7, 2026',
    time: '7:00 AM',
    duration: '38:42',
    strokes: 762,
    overallScore: 84,
    avgRate: 24,
    distance: '7.1 km',
    catchScore: 86,
    driveScore: 88,
    recoveryScore: 74,
    metrics: [
      { label: 'Blade Entry Angle', value: '41 deg', status: 'good' },
      { label: 'Catch Timing', value: '0.13s', status: 'good' },
      { label: 'Leg Drive Power', value: '320W', status: 'good' },
      { label: 'Sequencing', value: '92%', status: 'great' },
      { label: 'Recovery Speed', value: 'Slightly fast', status: 'improve' },
      { label: 'Slide Control', value: '79%', status: 'improve' },
      { label: 'Body Prep Timing', value: 'Late', status: 'improve' },
      { label: 'Handle Height', value: 'Consistent', status: 'great' },
    ],
    insight: 'Recovery phase needs attention. Hands are moving away too quickly, which is compressing the body preparation time at the catch.',
  },
  {
    id: 3,
    label: 'Technique Focus',
    date: 'Mar 5, 2026',
    time: '6:15 AM',
    duration: '45:08',
    strokes: 901,
    overallScore: 83,
    avgRate: 25,
    distance: '8.8 km',
    catchScore: 84,
    driveScore: 87,
    recoveryScore: 75,
    metrics: [
      { label: 'Blade Entry Angle', value: '40 deg', status: 'improve' },
      { label: 'Catch Timing', value: '0.14s', status: 'good' },
      { label: 'Leg Drive Power', value: '332W', status: 'good' },
      { label: 'Sequencing', value: '90%', status: 'good' },
      { label: 'Recovery Speed', value: 'Too fast', status: 'improve' },
      { label: 'Slide Control', value: '77%', status: 'improve' },
      { label: 'Body Prep Timing', value: 'On time', status: 'good' },
      { label: 'Handle Height', value: 'Dropping', status: 'improve' },
    ],
    insight: 'Blade entry angle is slightly low. Try to think about reaching over the toes more at the catch. Handle height drops in the second half of the drive.',
  },
];

const statusColors: Record<string, { text: string; bg: string }> = {
  great: { text: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  good: { text: 'text-sky-400', bg: 'bg-sky-500/10' },
  improve: { text: 'text-amber-400', bg: 'bg-amber-500/10' },
};

const statusLabels: Record<string, string> = {
  great: 'Excellent',
  good: 'Good',
  improve: 'Needs Work',
};

function scoreColor(s: number) {
  if (s >= 85) return 'text-emerald-400';
  if (s >= 80) return 'text-sky-400';
  return 'text-amber-400';
}

function scoreBg(s: number) {
  if (s >= 85) return 'bg-emerald-500/10';
  if (s >= 80) return 'bg-sky-500/10';
  return 'bg-amber-500/10';
}

export default function DashboardData() {
  const [selectedId, setSelectedId] = useState(sessions[0].id);
  const selected = sessions.find((s) => s.id === selectedId)!;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Session Data</h1>
        <p className="text-sm text-zinc-500">Detailed breakdown of each rowing session.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-2">
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                selectedId === s.id
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg ${scoreBg(s.overallScore)} flex items-center justify-center flex-shrink-0`}>
                <Activity className={`w-5 h-5 ${scoreColor(s.overallScore)}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">{s.label}</p>
                <p className="text-xs text-zinc-600">{s.date}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-lg font-bold font-mono ${scoreColor(s.overallScore)}`}>{s.overallScore}</span>
                <ChevronRight className="w-4 h-4 text-zinc-700" />
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-white">{selected.label}</h2>
                <p className="text-sm text-zinc-500">{selected.date} at {selected.time}</p>
              </div>
              <div className={`text-3xl font-bold font-mono ${scoreColor(selected.overallScore)}`}>
                {selected.overallScore}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Timer, label: 'Duration', value: selected.duration },
                { icon: Activity, label: 'Strokes', value: String(selected.strokes) },
                { icon: Zap, label: 'Avg Rate', value: `${selected.avgRate} SPM` },
                { icon: Target, label: 'Distance', value: selected.distance },
              ].map((m) => (
                <div key={m.label} className="p-3 rounded-lg bg-zinc-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <m.icon className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-xs text-zinc-500">{m.label}</span>
                  </div>
                  <span className="text-sm font-bold text-white font-mono">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: 'Catch', score: selected.catchScore },
                { label: 'Drive', score: selected.driveScore },
                { label: 'Recovery', score: selected.recoveryScore },
              ].map((phase) => (
                <div key={phase.label} className="p-4 rounded-lg bg-zinc-800/50">
                  <span className="text-xs text-zinc-500">{phase.label}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xl font-bold font-mono ${scoreColor(phase.score)}`}>{phase.score}</span>
                    <div className="flex-1 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${phase.score}%`,
                          backgroundColor: phase.score >= 85 ? '#10b981' : phase.score >= 80 ? '#0ea5e9' : '#f59e0b',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Detailed Metrics</h3>
            <div className="space-y-0">
              {selected.metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <span className="text-sm text-zinc-300">{m.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-zinc-400">{m.value}</span>
                    <span className={`px-2.5 py-1 rounded text-xs font-medium ${statusColors[m.status].text} ${statusColors[m.status].bg}`}>
                      {statusLabels[m.status]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">AI Insight</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{selected.insight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
