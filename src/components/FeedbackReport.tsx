import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Stepper, { Step } from './Stepper';

const catchData = {
  score: 87,
  metrics: [
    { label: 'Blade Entry Angle', value: '42deg', target: '45deg', status: 'good' },
    { label: 'Catch Timing', value: '0.12s', target: '< 0.15s', status: 'great' },
    { label: 'Handle Speed', value: '2.1 m/s', target: '2.3 m/s', status: 'improve' },
    { label: 'Body Angle at Catch', value: '28deg', target: '30deg', status: 'good' },
  ],
};

const driveData = {
  score: 91,
  metrics: [
    { label: 'Leg Drive Power', value: '340W', target: '320W', status: 'great' },
    { label: 'Sequencing', value: '94%', target: '90%', status: 'great' },
    { label: 'Handle Height', value: 'Consistent', target: 'Consistent', status: 'great' },
    { label: 'Posture', value: '88%', target: '85%', status: 'good' },
  ],
};

const recoveryData = {
  score: 74,
  metrics: [
    { label: 'Recovery Time', value: '1.8s', target: '2.0s', status: 'improve' },
    { label: 'Hand Speed', value: 'Too fast', target: 'Controlled', status: 'improve' },
    { label: 'Body Preparation', value: 'Late', target: 'Early', status: 'improve' },
    { label: 'Slide Control', value: '78%', target: '85%', status: 'good' },
  ],
};

const sessionSummary = {
  totalStrokes: 847,
  avgRate: 26,
  duration: '42:15',
  overallScore: 84,
  improvement: '+3',
};

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    great: 'bg-emerald-500/20 text-emerald-400',
    good: 'bg-sky-500/20 text-sky-400',
    improve: 'bg-amber-500/20 text-amber-400',
  };
  const labels: Record<string, string> = {
    great: 'Excellent',
    good: 'Good',
    improve: 'Needs Work',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {labels[status]}
    </span>
  );
}

function MetricsTable({ metrics }: { metrics: typeof catchData.metrics }) {
  return (
    <div className="space-y-3 mt-4">
      {metrics.map((m, i) => (
        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
          <div>
            <div className="text-sm font-medium text-white">{m.label}</div>
            <div className="text-xs text-zinc-500 mt-0.5">Target: {m.target}</div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-zinc-300">{m.value}</span>
            <StatusBadge status={m.status} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ScoreRing({ score, label }: { score: number; label: string }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 85 ? '#10b981' : score >= 75 ? '#0ea5e9' : '#f59e0b';

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
        <circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
        <text x="50" y="46" textAnchor="middle" className="fill-white text-2xl font-bold" style={{ fontSize: '24px', fontWeight: 700 }}>
          {score}
        </text>
        <text x="50" y="62" textAnchor="middle" className="fill-zinc-500" style={{ fontSize: '10px' }}>
          / 100
        </text>
      </svg>
      <span className="text-xs text-zinc-400 mt-1 font-medium">{label}</span>
    </div>
  );
}

export default function FeedbackReport() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="feedback" className="relative py-16 lg:py-20 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Your Post-Row
            <span className="font-serif italic text-emerald-400"> Breakdown</span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            After every session, get a detailed analysis of every phase of your stroke.
            Pinpoint exactly where to improve.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Session Report</h3>
                <p className="text-sm text-zinc-500 mt-0.5">March 8, 2026 - Morning Row</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400">{sessionSummary.improvement} vs last</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8 py-4 border-y border-white/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-mono">{sessionSummary.totalStrokes}</div>
                <div className="text-xs text-zinc-500 mt-1">Strokes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-mono">{sessionSummary.avgRate}</div>
                <div className="text-xs text-zinc-500 mt-1">Avg SPM</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-mono">{sessionSummary.duration}</div>
                <div className="text-xs text-zinc-500 mt-1">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 font-mono">{sessionSummary.overallScore}</div>
                <div className="text-xs text-zinc-500 mt-1">Score</div>
              </div>
            </div>

            <div className="flex justify-center gap-8 mb-6">
              <ScoreRing score={catchData.score} label="Catch" />
              <ScoreRing score={driveData.score} label="Drive" />
              <ScoreRing score={recoveryData.score} label="Recovery" />
            </div>

            <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 mt-6">
              <h4 className="text-sm font-semibold text-zinc-300 mb-1">Key Insight</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Your recovery phase is rushed. Focus on slowing your hands away from the body
                and letting the slide follow naturally. This will also improve your catch timing.
              </p>
            </div>
          </div>

          <div>
            <Stepper
              initialStep={1}
              onStepChange={() => {}}
              onFinalStepCompleted={() => {}}
              backButtonText="Previous"
              nextButtonText="Next Phase"
              accentColor="#10b981"
            >
              <Step>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-emerald-400">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">The Catch</h3>
                      <p className="text-xs text-zinc-500">Blade entry and initial connection</p>
                    </div>
                  </div>
                  <MetricsTable metrics={catchData.metrics} />
                </div>
              </Step>
              <Step>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-sky-400">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">The Drive</h3>
                      <p className="text-xs text-zinc-500">Power application and sequencing</p>
                    </div>
                  </div>
                  <MetricsTable metrics={driveData.metrics} />
                </div>
              </Step>
              <Step>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-amber-400">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">The Recovery</h3>
                      <p className="text-xs text-zinc-500">Blade extraction and return</p>
                    </div>
                  </div>
                  <MetricsTable metrics={recoveryData.metrics} />
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </section>
  );
}
