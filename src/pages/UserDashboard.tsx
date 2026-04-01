import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, BarChart3, Play, TrendingUp } from 'lucide-react';
import UserProfileDropdown from '../components/UserProfileDropdown';
import DashboardData from '../components/DashboardData';
import DashboardStartNow from '../components/DashboardStartNow';
import DashboardTrends from '../components/DashboardTrends';

const tabs = [
  { id: 'start', label: 'Start Now', icon: Play },
  { id: 'data', label: 'Data', icon: BarChart3 },
  { id: 'trends', label: 'Trends', icon: TrendingUp },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function UserDashboard() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('start');

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-0.5">
            <span className="text-xl font-bold text-white tracking-tight">Catch</span>
            <span className="text-xl font-serif italic text-brand-400 tracking-tight">Perfect</span>
          </Link>

          <nav className="hidden sm:flex items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-5 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <img
                src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-400/30"
              />
              <span className="text-sm font-medium text-zinc-300 hidden md:block">Alex Rivera</span>
              <ChevronDown className="w-4 h-4 text-zinc-500" />
            </button>
            {profileOpen && <UserProfileDropdown onClose={() => setProfileOpen(false)} />}
          </div>
        </div>

        <div className="sm:hidden flex border-t border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-brand-400 border-b-2 border-brand-400'
                  : 'text-zinc-500'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === 'start' && <DashboardStartNow />}
        {activeTab === 'data' && <DashboardData />}
        {activeTab === 'trends' && <DashboardTrends />}
      </main>
    </div>
  );
}
