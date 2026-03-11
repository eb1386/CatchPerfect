import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, Clock, Activity, TrendingUp, Calendar, ArrowLeft } from 'lucide-react';
import UserProfileDropdown from '../components/UserProfileDropdown';
import RecentWorkouts from '../components/RecentWorkouts';
import UserStats from '../components/UserStats';

export default function UserDashboard() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-baseline gap-0.5">
              <span className="text-xl font-bold text-white tracking-tight">Catch</span>
              <span className="text-xl font-serif italic text-emerald-400 tracking-tight">Perfect</span>
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              <img
                src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-500/30"
              />
              <span className="text-sm font-medium text-zinc-300 hidden sm:block">Alex Rivera</span>
              <ChevronDown className="w-4 h-4 text-zinc-500" />
            </button>
            {profileOpen && <UserProfileDropdown onClose={() => setProfileOpen(false)} />}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Good morning, Alex
          </h1>
          <p className="text-zinc-500">Ready to get on the water? Here's your overview.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2">
            <button className="w-full group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-8 text-left transition-all duration-300 hover:border-emerald-500/40 hover:from-emerald-500/15 hover:to-emerald-600/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <Play className="w-6 h-6 text-emerald-400 ml-0.5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Start Workout</h2>
                      <p className="text-sm text-zinc-400">Connect your sensor and begin rowing</p>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold group-hover:bg-emerald-400 transition-colors">
                  <Play className="w-4 h-4" />
                  Begin
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6 text-sm text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Last session: 2 days ago
                </span>
                <span className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4" />
                  Avg session: 38 min
                </span>
              </div>
            </button>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">This Week</h3>
              <Calendar className="w-4 h-4 text-zinc-600" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-zinc-400">Sessions</span>
                  <span className="text-lg font-bold text-white font-mono">3 / 5</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-zinc-400">Total Strokes</span>
                  <span className="text-lg font-bold text-white font-mono">2,410</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-zinc-400">Avg Score</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">84</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs text-emerald-400">+3 from last week</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <UserStats />
        <RecentWorkouts />
      </main>
    </div>
  );
}
