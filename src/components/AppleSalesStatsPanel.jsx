import PropTypes from 'prop-types'

// Code splitting: este panel se carga bajo demanda con React.lazy y Suspense.
export default function AppleSalesStatsPanel() {
  return (
    <div className="mt-5 grid gap-3 md:grid-cols-3">
      <Metric label="iPhone" value="58% de ventas" />
      <Metric label="Mac" value="24% de ventas" />
      <Metric label="Airpods" value="18% de ventas" />
    </div>
  )
}

// Métrica visual simple del panel diferido.
function Metric({ label, value }) {
  return (
    <div className="rounded-3xl border border-slate-200/30 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">{value}</p>
    </div>
  )
}

Metric.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}