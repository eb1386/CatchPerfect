import { useState } from 'react';
import { Lightbulb, ChevronDown, Target } from 'lucide-react';

export interface CoachingTip {
  analogy: string;
  drill: string;
  why: string;
}

interface BeginnerTipProps {
  tip: CoachingTip;
  status: string;
}

export default function BeginnerTip({ tip, status }: BeginnerTipProps) {
  const [expanded, setExpanded] = useState(false);

  if (status === 'great') return null;

  return (
    <div className="mt-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-xs text-amber-400/80 hover:text-amber-300 transition-colors group"
      >
        <Lightbulb className="w-3 h-3" />
        <span className="font-medium">Beginner tip</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div className="mt-2.5 ml-0.5 space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex gap-2.5 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-amber-500/10 flex-shrink-0 mt-0.5">
              <span className="text-xs">💡</span>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-300/90 mb-0.5">Think of it like this</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{tip.analogy}</p>
            </div>
          </div>

          <div className="flex gap-2.5 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-emerald-500/10 flex-shrink-0 mt-0.5">
              <Target className="w-3 h-3 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-300/90 mb-0.5">Try this drill</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{tip.drill}</p>
            </div>
          </div>

          <p className="text-xs text-zinc-600 italic pl-1">{tip.why}</p>
        </div>
      )}
    </div>
  );
}
