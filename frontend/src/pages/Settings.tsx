import { useState } from 'react'
import { Settings as SettingsIcon, Key, Shield, Cpu, CheckCircle } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

export default function Settings() {
  const [strictness, setStrictness] = useState('ultimate')
  const [saved, setSaved] = useState(false)

  const { data: agentInfo } = useQuery({
    queryKey: ['agents'],
    queryFn: () => fetch('/api/agents').then(r => r.json()),
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-8 space-y-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 text-sm mt-1">System configuration and runtime options</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-5">
        <h2 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-purple-400" /> Engine Configuration
        </h2>

        <div>
          <label className="text-xs text-gray-500 block mb-2">Model</label>
          <div className="flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
            <span className="text-sm text-gray-300">{agentInfo?.model ?? 'claude-sonnet-4-20250514'}</span>
            <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
              agentInfo?.live ? 'text-green-400 bg-green-500/10 border border-green-500/20'
                             : 'text-yellow-400 bg-yellow-500/10 border border-yellow-500/20'
            }`}>
              {agentInfo?.live ? 'LIVE' : 'Demo Mode'}
            </span>
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-500 block mb-2">Default Evaluation Strictness</label>
          <div className="flex gap-2">
            {(['standard', 'strict', 'ultimate'] as const).map(s => (
              <button key={s} onClick={() => setStrictness(s)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors border ${
                  strictness === s
                    ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
                    : 'bg-gray-800 text-gray-500 border-gray-700 hover:text-gray-300'
                }`}>
                {s}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2">
            {strictness === 'standard' ? 'Basic constitutional checks. Faster response.' :
             strictness === 'strict' ? 'Enhanced multi-axiom scoring. Balanced.' :
             'Full 10,000-future multiverse simulation. Maximum safety.'}
          </p>
        </div>

        <div>
          <label className="text-xs text-gray-500 block mb-2">Futures per Evaluation</label>
          <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-300">
            10,000 — Fixed (Monte-Carlo multiverse simulation)
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-5">
        <h2 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Key className="w-4 h-4 text-yellow-400" /> API Configuration
        </h2>
        <div>
          <label className="text-xs text-gray-500 block mb-2">Anthropic API Key</label>
          <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
            <p className="text-sm text-gray-400">
              {agentInfo?.live
                ? '••••••••••••••••••••••• (configured)'
                : 'Not configured — set ANTHROPIC_API_KEY environment secret to enable live Claude evaluation'}
            </p>
          </div>
          {!agentInfo?.live && (
            <p className="text-xs text-yellow-400/80 mt-2">
              Running in demo mode. Add your Anthropic API key as an environment secret to enable real AI evaluation.
            </p>
          )}
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
        <h2 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-400" /> Security
        </h2>
        <div className="space-y-2 text-xs text-gray-500">
          {[
            'Constitutional axioms cannot be suspended or overridden',
            'No override codes exist — axioms are hardcoded',
            'All decisions are fully auditable',
            'CORS open in development — restrict CORS_ORIGINS in production',
            'Set SECRET_KEY and JWT_SECRET as environment secrets for production',
          ].map(note => (
            <div key={note} className="flex items-start gap-2">
              <Shield className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleSave}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
          saved ? 'bg-green-600 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'
        }`}>
        {saved ? <><CheckCircle className="w-4 h-4" /> Saved</> : <><SettingsIcon className="w-4 h-4" /> Save Preferences</>}
      </button>
    </div>
  )
}
