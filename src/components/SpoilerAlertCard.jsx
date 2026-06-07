// Tarjeta de spoiler: muestra los próximos lanzamientos cuando el acceso está habilitado.
export function SpoilerAlertCard() {
  return (
    <div className="rounded-3xl border border-fuchsia-200/30 bg-white p-5 text-sm text-fuchsia-700 dark:border-fuchsia-400/20 dark:bg-fuchsia-400/10 dark:text-fuchsia-50">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-600 dark:text-fuchsia-200">Alerta spoiler</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Próximos lanzamientos Apple</h3>
      <ul className="mt-3 space-y-2 leading-6 text-fuchsia-700/90 dark:text-fuchsia-50/90">
        <li>iPhone 18</li>
        <li>iPhone 18 Air</li>
        <li>iPhone ULTRA</li>
        <li>iPhone 18 Pro</li>
        <li>iPhone 18 Pro Max</li>
        <li>Apple Glasses</li>
      </ul>
    </div>
  )
}