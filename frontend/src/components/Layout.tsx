import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Zap, Shield, BarChart3, Settings, Activity } from 'lucide-react'

const nav = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/evaluate', icon: Zap, label: 'Evaluator' },
  { to: '/compliance', icon: Shield, label: 'Compliance' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <aside className="w-56 shrink-0 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="px-5 py-5 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-sm leading-tight text-white">COVENANT<br />
              <span className="text-cyan-400 font-extrabold">NEXUS v8</span></span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Constitutional Superintelligence</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="px-5 py-4 border-t border-gray-800">
          <p className="text-xs text-gray-600">5 Constitutional Axioms</p>
          <p className="text-xs text-gray-600">4 Parallel AI Agents</p>
          <p className="text-xs text-gray-600">10,000 Futures/Query</p>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
