import { useState } from 'react';
import { Play, Bluetooth, CheckCircle2, Radio, Battery, Wifi } from 'lucide-react';

export default function DashboardStartNow() {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Start a Workout</h1>
        <p className="text-sm text-zinc-500">Connect your sensor and begin your rowing session.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-5">Sensor Status</h2>

            {!connected ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 flex items-center justify-center mx-auto mb-4">
                  <Bluetooth className={`w-7 h-7 ${connecting ? 'text-sky-400 animate-pulse' : 'text-zinc-500'}`} />
                </div>
                <p className="text-sm text-zinc-400 mb-1">
                  {connecting ? 'Searching for sensor...' : 'No sensor connected'}
                </p>
                <p className="text-xs text-zinc-600 mb-6">
                  {connecting ? 'Make sure your sensor is powered on and nearby' : 'Clip the sensor to your oar and tap connect'}
                </p>
                <button
                  onClick={handleConnect}
                  disabled={connecting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 transition-colors disabled:opacity-50"
                >
                  <Bluetooth className="w-4 h-4" />
                  {connecting ? 'Connecting...' : 'Connect Sensor'}
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Catch Perfect Sensor v2</p>
                    <p className="text-xs text-zinc-500">Connected via Bluetooth LE</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-800/50">
                    <Battery className="w-4 h-4 text-emerald-400" />
                    <div>
                      <p className="text-xs text-zinc-500">Battery</p>
                      <p className="text-sm font-semibold text-white">94%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-800/50">
                    <Wifi className="w-4 h-4 text-sky-400" />
                    <div>
                      <p className="text-xs text-zinc-500">Signal</p>
                      <p className="text-sm font-semibold text-white">Strong</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-800/50">
                    <Radio className="w-4 h-4 text-amber-400" />
                    <div>
                      <p className="text-xs text-zinc-500">Rate</p>
                      <p className="text-sm font-semibold text-white">200 Hz</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {connected && (
            <button className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-emerald-500 text-white text-lg font-bold hover:bg-emerald-400 transition-colors">
              <Play className="w-6 h-6" />
              Start Rowing Session
            </button>
          )}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-5">Quick Stats</h2>
            <div className="space-y-4">
              {[
                { label: 'Total Sessions', value: '23' },
                { label: 'Total Strokes', value: '18,420' },
                { label: 'Current Streak', value: '5 days' },
                { label: 'Best Score', value: '91' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-zinc-500">{stat.label}</span>
                  <span className="text-sm font-bold text-white font-mono">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Pre-Session Checklist</h2>
            <div className="space-y-3">
              {[
                { text: 'Sensor charged above 20%', done: true },
                { text: 'Sensor clipped to oar shaft', done: connected },
                { text: 'Bluetooth enabled on phone', done: true },
                { text: 'Sensor connected', done: connected },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                    item.done ? 'bg-emerald-500/15' : 'bg-zinc-800'
                  }`}>
                    {item.done && (
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${item.done ? 'text-zinc-300' : 'text-zinc-600'}`}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
