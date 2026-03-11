import { useQuery } from '@tanstack/react-query'
import { Shield, CheckCircle, BookOpen } from 'lucide-react'

const AXIOM_DETAILS = [
  {
    id: 'observer_rights', roman: 'I', label: 'Observer Rights',
    desc: "No action may permanently remove any observer's ability to observe, decide, or act autonomously.",
    implications: ['Consent must be obtained before restricting observation', 'Autonomous agents must preserve user oversight', 'No action may silently remove visibility'],
  },
  {
    id: 'reversibility', roman: 'II', label: 'Reversibility',
    desc: 'Always prefer reversible actions. Irreversible actions require maximum scrutiny across all futures.',
    implications: ['Soft deletes preferred over hard deletes', 'Staged rollouts over big-bang deployments', 'Backup and restore capabilities mandatory'],
  },
  {
    id: 'transparency', roman: 'III', label: 'Transparency',
    desc: 'Every decision must be fully explainable and auditable. No black-box reasoning permitted.',
    implications: ['All AI decisions must include a reasoning chain', 'Full audit log retention', 'No opaque ML pipelines in compliance-critical paths'],
  },
  {
    id: 'non_domination', roman: 'IV', label: 'Non-Domination',
    desc: 'No single entity — human, AI, corporation, or state — may gain disproportionate systemic control.',
    implications: ['Power concentration triggers automatic REVIEW', 'Multi-party approval for high-impact decisions', 'Diversity of control enforced across system boundaries'],
  },
  {
    id: 'truth_preservation', roman: 'V', label: 'Truth Preservation',
    desc: 'Never create, amplify, or propagate false information under any circumstances.',
    implications: ['AI outputs must be factually grounded', 'No synthetic misinformation generation', 'Source attribution required for claims'],
  },
]

export default function Compliance() {
  const { data: axiomsData } = useQuery({
    queryKey: ['axioms'],
    queryFn: () => fetch('/api/axioms').then(r => r.json()),
  })

  return (
    <div className="p-8 space-y-8 max-w-4xl">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Compliance Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Five inviolable constitutional axioms — cannot be suspended or overridden</p>
        </div>
        {axiomsData && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border text-green-400 border-green-500/30 bg-green-500/10">
            <CheckCircle className="w-3.5 h-3.5" />
            {axiomsData.count} Axioms Active
          </div>
        )}
      </div>

      <div className="space-y-4">
        {AXIOM_DETAILS.map(a => (
          <div key={a.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <span className="text-xs font-bold text-cyan-400 font-mono">{a.roman}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white mb-1">{a.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{a.desc}</p>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-gray-600" />
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Practical Implications</span>
                </div>
                <ul className="space-y-1.5">
                  {a.implications.map(imp => (
                    <li key={imp} className="flex items-start gap-2 text-xs text-gray-400">
                      <Shield className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-400" /> Verdict Protocol
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { verdict: 'EXECUTE', color: 'text-green-400 border-green-500/30 bg-green-500/5', desc: 'All agents pass. Safe across >95% of simulated futures.' },
            { verdict: 'REVIEW', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5', desc: 'One or more agents flag concerns. Human oversight required.' },
            { verdict: 'BLOCK', color: 'text-red-400 border-red-500/30 bg-red-500/5', desc: 'Constitutional violation detected. Action must not proceed.' },
          ].map(({ verdict, color, desc }) => (
            <div key={verdict} className={`border rounded-lg p-4 ${color}`}>
              <p className="font-mono font-bold text-sm mb-1">{verdict}</p>
              <p className="text-xs opacity-80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
