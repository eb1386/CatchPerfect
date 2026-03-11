import { User, Settings, Bell, HelpCircle, LogOut } from 'lucide-react';

const menuItems = [
  { icon: User, label: 'My Profile' },
  { icon: Settings, label: 'Settings' },
  { icon: Bell, label: 'Notifications' },
  { icon: HelpCircle, label: 'Help & Support' },
];

export default function UserProfileDropdown({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-full mt-2 w-64 z-50 rounded-xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40 overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-semibold text-white">Alex Rivera</div>
              <div className="text-xs text-zinc-500">alex.rivera@email.com</div>
            </div>
          </div>
        </div>
        <div className="py-1.5">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>
        <div className="border-t border-white/5 py-1.5">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
