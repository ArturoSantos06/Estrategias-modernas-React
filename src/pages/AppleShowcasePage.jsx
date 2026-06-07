import { lazy, Suspense, useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { AppleHeader } from '../components/AppleHeader.jsx'
import { FeaturedProducts } from '../components/FeaturedProducts.jsx'
import { Button } from '../components/Button.jsx'
import { SpoilerAlertCard } from '../components/SpoilerAlertCard.jsx'
import { SpoilerAccess } from '../components/SpoilerAccess.jsx'
import { ProductComparisonToggle } from '../components/ProductComparisonToggle.jsx'
import { iphoneComparison } from '../examples/iphoneComparison.js'

// Página principal
const LazyInsightsPanel = lazy(() => import('../components/AppleSalesStatsPanel.jsx'))
const ProtectedSpoilerAlertCard = SpoilerAccess(SpoilerAlertCard)

export default function AppleShowcasePage() {
  const { theme, toggleTheme } = useTheme()
  const [showSpoiler, setShowSpoiler] = useState(false)
  const [showInsights, setShowInsights] = useState(false)

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-slate-950 text-white' : 'min-h-screen bg-[#f5f5f7] text-slate-950'}>
      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <AppleHeader author="Arturo Santos" title="Apple Store: últimos lanzamientos" onToggleTheme={toggleTheme} />

        <FeaturedProducts />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-4xl border border-slate-200/30 bg-white p-6 shadow-xl shadow-slate-200/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/20">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Comparación entre iPhone 17 y iPhone 16</h2>
              </div>
            </div>

            <div className="mt-5">
              <ProductComparisonToggle>
                {({ showFirstModel, toggleModel }) => {
                  const currentModel = showFirstModel ? iphoneComparison[0] : iphoneComparison[1]
                  const nextLabel = showFirstModel ? iphoneComparison[1].name : iphoneComparison[0].name

                  return (
                    <div className={`rounded-3xl border border-slate-200/30 bg-linear-to-br ${currentModel.accent} p-px dark:border-white/10`}>
                      <div className="rounded-3xl bg-white p-5 dark:bg-slate-950/60 dark:text-white">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">{currentModel.tag}</p>
                            <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{currentModel.name}</h3>
                          </div>
                          <Button
                            type="button"
                            onClick={toggleModel}
                            variant="secondary"
                          >
                            Cambiar a {nextLabel}
                          </Button>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{currentModel.summary}</p>
                        <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          {currentModel.points.map((point) => (
                            <li key={point} className="rounded-2xl border border-slate-200/30 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                }}
              </ProductComparisonToggle>
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-4xl border border-slate-200/30 bg-white p-6 shadow-xl shadow-slate-200/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">Alerta spoiler</h2>
                </div>
                <Button
                  type="button"
                  onClick={() => setShowSpoiler((current) => !current)}
                  variant="secondary"
                >
                  {showSpoiler ? 'Ocultar spoiler' : 'Ver spoiler'}
                </Button>
              </div>

              <div className="mt-5">
                <ProtectedSpoilerAlertCard isAllowed={showSpoiler} />
              </div>
            </section>

            <section className="rounded-4xl border border-slate-200/30 bg-white p-6 shadow-xl shadow-slate-200/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/20">
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Estadísticas de ventas</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">Este bloque se carga solo cuando el usuario lo pide.</p>
              {!showInsights ? (
                <Button
                  type="button"
                  onClick={() => setShowInsights(true)}
                  variant="accent"
                  className="mt-5"
                >
                  Ver estadísticas
                </Button>
              ) : (
                <Suspense
                  fallback={
                    <div className="mt-5 rounded-3xl border border-slate-200/30 bg-white p-5 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950/35 dark:text-slate-300">
                      Cargando estadísticas...
                    </div>
                  }
                >
                  <LazyInsightsPanel />
                </Suspense>
              )}
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}