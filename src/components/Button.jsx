import PropTypes from 'prop-types'

const variantClasses = {
  primary: 'bg-white text-slate-950 hover:bg-slate-200 dark:bg-white/5 dark:text-white',
  secondary:
    'border border-slate-200/30 bg-white text-slate-950 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10',
  accent: 'bg-sky-400 text-slate-950 hover:bg-sky-300 dark:bg-sky-500 dark:text-white',
  ghost: 'text-slate-950 hover:bg-slate-100 dark:text-white dark:hover:bg-white/5',
}

export function Button({ as: Component = 'button', variant = 'primary', className = '', ...props }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5'
  const variantClassName = variantClasses[variant] ?? variantClasses.primary

  return <Component className={`${baseClasses} ${variantClassName} ${className}`.trim()} {...props} />
}

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'ghost']),
  className: PropTypes.string,
}