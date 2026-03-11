const phrases = [
  'No Individual Feedback',
  'Coaches Are Stretched Thin',
  'Bad Habits Form Fast',
  'Technique Goes Unchecked',
];

function MarqueeRow({ direction, speed }: { direction: 'left' | 'right'; speed: number }) {
  const items = [...phrases, ...phrases, ...phrases, ...phrases];
  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="overflow-hidden whitespace-nowrap py-3">
      <div
        className="inline-flex"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {items.map((phrase, i) => (
          <span key={i} className="inline-flex items-center mx-4">
            <span className="text-sm lg:text-base font-semibold tracking-wide uppercase text-zinc-500">
              {phrase}
            </span>
            <span className="ml-8 w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="bg-zinc-950 border-y border-white/5 py-2 overflow-hidden select-none">
      <MarqueeRow direction="left" speed={30} />
      <MarqueeRow direction="right" speed={35} />
    </div>
  );
}
