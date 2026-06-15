import PropTypes from 'prop-types'
import { Button } from './Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export function AppleHeader({ author, title, onToggleTheme }) {
  const { user, logout } = useAuth()

  return (
    <section className="overflow-hidden rounded-4xl border border-slate-200/30 bg-white p-6 shadow-2xl shadow-slate-200/10 backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
            {author}
          </span>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="button" onClick={onToggleTheme} variant="primary">
              Cambiar tema
            </Button>
            <Button as="a" href="#products" variant="secondary">
              Ver productos
            </Button>
          </div>
        </div>
      {user && (
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-2 pr-4 shadow-sm lg:mb-1 dark:bg-white/5">
          <p className="hidden pl-2 text-sm font-medium text-slate-800 sm:block dark:text-slate-300">
            {user.email}
          </p>
          <button
            onClick={logout}
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-900/30 dark:bg-red-900/50 dark:text-red-400 dark:hover:bg-red-900/80"
          >
            Cerrar sesión
          </button>
        </div>
      )}
      </div>
    </section>
  )
}

AppleHeader.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}