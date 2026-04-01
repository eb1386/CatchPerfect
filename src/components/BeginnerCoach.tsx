import { useState } from 'react';
import { Lightbulb, ChevronDown, Target, ChevronRight } from 'lucide-react';
import { coachingTips } from '../data/coachingTips';
import type { CoachingTip } from '../data/coachingTips';

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

function TipCard({ label, tip, status }: { label: string; tip: CoachingTip; status: string }) {
  const [expanded, setExpanded] = useState(false);

  const isImprove = status === 'improve';
  const borderColor = isImprove ? 'border-amber-500/15' : 'border-sky-500/10';
  const bgColor = isImprove ? 'bg-amber-500/[0.03]' : 'bg-sky-500/[0.03]';
  const accentText = isImprove ? 'text-amber-400' : 'text-sky-400';
  const badgeBg = isImprove ? 'bg-amber-500/15' : 'bg-sky-500/15';
  const badgeText = isImprove ? 'text-amber-400' : 'text-sky-400';
  const badgeLabel = isImprove ? 'Needs Work' : 'Good';

  return (
    <div className={`rounded-xl border ${borderColor} ${bgColor} overflow-hidden transition-all duration-200`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 p-3.5 text-left"
      >
        <div className={`w-8 h-8 rounded-lg ${isImprove ? 'bg-amber-500/10' : 'bg-sky-500/10'} flex items-center justify-center flex-shrink-0`}>
          <Lightbulb className={`w-4 h-4 ${accentText}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white">{label}</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${badgeBg} ${badgeText}`}>
              {badgeLabel}
            </span>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5 truncate">{tip.analogy.slice(0, 60)}...</p>
        </div>
        <ChevronRight className={`w-4 h-4 text-zinc-600 flex-shrink-0 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`} />
      </button>

      {expanded && (
        <div className="px-3.5 pb-3.5 space-y-2.5">
          <div className="flex gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-amber-500/10 flex-shrink-0 mt-0.5">
              <Lightbulb className="w-3 h-3 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-amber-300/90 mb-0.5">Think of it like this</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{tip.analogy}</p>
            </div>
          </div>

          <div className="flex gap-2.5 p-3 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/10">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-emerald-500/10 flex-shrink-0 mt-0.5">
              <Target className="w-3 h-3 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-300/90 mb-0.5">Try this drill</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{tip.drill}</p>
            </div>
          </div>

          <p className="text-[11px] text-zinc-600 italic px-1">{tip.why}</p>
        </div>
      )}
    </div>
  );
}

export default function BeginnerCoach({ metrics }: BeginnerCoachProps) {
  const [showAll, setShowAll] = useState(false);

  const tipsToShow = metrics
    .filter((m) => m.status !== 'great' && coachingTips[m.label])
    .sort((a, b) => (statusPriority[a.status] ?? 1) - (statusPriority[b.status] ?? 1));

  if (tipsToShow.length === 0) return null;

  const visible = showAll ? tipsToShow : tipsToShow.slice(0, 3);
  const hasMore = tipsToShow.length > 3;

  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Beginner Coach</h4>
          <p className="text-[11px] text-zinc-600">Simple tips and drills to improve your weak spots</p>
        </div>
      </div>

      <div className="space-y-2">
        {visible.map((m) => (
          <TipCard
            key={m.label}
            label={m.label}
            tip={coachingTips[m.label]}
            status={m.status}
          />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 mt-3 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mx-auto"
        >
          <span>{showAll ? 'Show less' : `Show ${tipsToShow.length - 3} more`}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
        </button>
      )}
    </div>
  );
}
