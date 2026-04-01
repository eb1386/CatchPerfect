import { useState } from 'react';
import { Lightbulb, Target, ChevronRight, Dumbbell } from 'lucide-react';
import { coachingTips, levelLabels } from '../data/coachingTips';
import type { LevelTip } from '../data/coachingTips';

interface Metric {
  label: string;
  value: string;
  status: string;
}

interface BeginnerCoachProps {
  metrics: Metric[];
}

const statusPriority: Record<string, number> = {
  improve: 0,
  good: 1,
  great: 2,
};

const levels = [1, 2, 3, 4, 5] as const;

function TipCard({ label, tip, status }: { label: string; tip: LevelTip; status: string }) {
  const [expanded, setExpanded] = useState(false);
  const isImprove = status === 'improve';

  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className={`w-full text-left rounded-lg border transition-all duration-200 ${
        expanded
          ? isImprove
            ? 'border-amber-500/20 bg-amber-500/[0.04]'
            : 'border-sky-500/15 bg-sky-500/[0.03]'
          : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
      }`}
    >
      <div className="flex items-center gap-3 p-3">
        <div className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 ${
          isImprove ? 'bg-amber-500/10' : 'bg-sky-500/10'
        }`}>
          <Target className={`w-3.5 h-3.5 ${isImprove ? 'text-amber-400' : 'text-sky-400'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white">{label}</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
              isImprove ? 'bg-amber-500/15 text-amber-400' : 'bg-sky-500/15 text-sky-400'
            }`}>
              {tip.focus}
            </span>
          </div>
        </div>
        <ChevronRight className={`w-3.5 h-3.5 text-zinc-600 flex-shrink-0 transition-transform duration-200 ${
          expanded ? 'rotate-90' : ''
        }`} />
      </div>

      {expanded && (
        <div className="px-3 pb-3 space-y-2">
          <div className="p-2.5 rounded-md bg-white/[0.03] border border-white/5">
            <div className="flex items-start gap-2">
              <Lightbulb className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isImprove ? 'text-amber-400' : 'text-sky-400'}`} />
              <p className="text-xs text-zinc-300 leading-relaxed">{tip.advice}</p>
            </div>
          </div>
          <div className="p-2.5 rounded-md bg-brand-400/[0.04] border border-brand-400/10">
            <div className="flex items-start gap-2">
              <Dumbbell className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-brand-400" />
              <p className="text-xs text-zinc-300 leading-relaxed">{tip.drill}</p>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}

function LevelSelector({ level, onChange }: { level: number; onChange: (l: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {levels.map((l) => {
        const active = l === level;
        const info = levelLabels[l];
        return (
          <button
            key={l}
            onClick={() => onChange(l)}
            className={`relative group flex-1 py-2 rounded-lg text-center transition-all duration-200 ${
              active
                ? 'bg-brand-400/15 border border-brand-400/30'
                : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]'
            }`}
          >
            <span className={`text-xs font-bold block ${active ? 'text-brand-400' : 'text-zinc-500'}`}>
              {l}
            </span>
            <span className={`text-[9px] block mt-0.5 ${active ? 'text-brand-400/70' : 'text-zinc-600'}`}>
              {info.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function BeginnerCoach({ metrics }: BeginnerCoachProps) {
  const [level, setLevel] = useState(0);

  const tipsToShow = metrics
    .filter((m) => m.status !== 'great' && coachingTips[m.label])
    .sort((a, b) => (statusPriority[a.status] ?? 1) - (statusPriority[b.status] ?? 1))
    .slice(0, 3);

  if (tipsToShow.length === 0) return null;

  if (level === 0) {
    return (
      <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-md bg-brand-400/10 flex items-center justify-center">
            <Lightbulb className="w-3.5 h-3.5 text-brand-400" />
          </div>
          <h4 className="text-sm font-semibold text-white">Coaching Tips</h4>
        </div>
        <p className="text-xs text-zinc-500 mb-3 ml-8">Select your experience level for personalized feedback</p>
        <LevelSelector level={0} onChange={setLevel} />
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-brand-400/10 flex items-center justify-center">
            <Lightbulb className="w-3.5 h-3.5 text-brand-400" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Coaching Tips</h4>
            <p className="text-[10px] text-zinc-600">
              {levelLabels[level].name} -- {levelLabels[level].desc}
            </p>
          </div>
        </div>
        <button
          onClick={() => setLevel(0)}
          className="text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors px-2 py-1 rounded border border-white/5 hover:border-white/10"
        >
          Change level
        </button>
      </div>

      <div className="space-y-2">
        {tipsToShow.map((m) => (
          <TipCard
            key={m.label}
            label={m.label}
            tip={coachingTips[m.label].levels[level]}
            status={m.status}
          />
        ))}
      </div>
    </div>
  );
}
