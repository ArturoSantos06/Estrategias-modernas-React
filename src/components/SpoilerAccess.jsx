import PropTypes from 'prop-types'

// Higher-Order Component: envuelve una vista y decide si se puede mostrar.
function LockedView() {
  return (
    <div className="rounded-3xl border border-slate-200/30 bg-white p-5 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950/35 dark:text-slate-300">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-600 dark:text-fuchsia-200">Alerta spoiler</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Contenido oculto</h3>
      <p className="mt-2 leading-6">Pulsa el botón para ver los próximos lanzamientos de Apple.</p>
    </div>
  )
}

LockedView.propTypes = {}

export function SpoilerAccess(WrappedComponent) {
  function AccessGate({ isAllowed = false, fallback, ...props }) {
    if (!isAllowed) {
      return fallback ?? <LockedView />
    }

    return <WrappedComponent {...props} />
  }

  AccessGate.propTypes = {
    isAllowed: PropTypes.bool,
    fallback: PropTypes.node,
  }

  return AccessGate
}
