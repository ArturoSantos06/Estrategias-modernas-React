import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import { Button } from './Button.jsx'
import { getCategories, getProducts } from '../services/productService.js'

// Componente contenedor/presentacional.
const categories = getCategories()
const allProducts = getProducts()

export function FeaturedProducts() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const debouncedQuery = query

  const visibleProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory = category === 'Todos' || product.category === category
      const searchableText = `${product.name} ${product.summary} ${product.price}`.toLowerCase()
      const matchesQuery = searchableText.includes(debouncedQuery.toLowerCase())

      return matchesCategory && matchesQuery
    })
  }, [category, debouncedQuery])

  return (
    <section
      id="products"
      className="rounded-4xl border border-slate-200/30 bg-white p-6 shadow-xl shadow-slate-200/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/20"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Productos Apple destacados</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-700 dark:text-slate-300">Explora productos, filtra y busca con una interfaz simple.</p>
      </div>

      <FeaturedProductsView
        category={category}
        categories={categories}
        onCategoryChange={setCategory}
        onQueryChange={setQuery}
        products={visibleProducts}
        query={query}
      />
    </section>
  )
}

// Vista del catálogo.
function FeaturedProductsView({ category, categories, onCategoryChange, onQueryChange, products, query }) {
  return (
    <div className="mt-6 space-y-5">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <label className="rounded-3xl border border-slate-200/30 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Buscar</span>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="iPhone, Mac, Watch, Audio..."
            className="mt-3 w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
          />
        </label>

        <div className="rounded-3xl border border-slate-200/30 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Filtro</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((item) => (
              <Button
                key={item}
                type="button"
                onClick={() => onCategoryChange(item)}
                variant={category === item ? 'accent' : 'secondary'}
                className="px-3 py-2"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 ? (
        <p className="text-sm text-slate-600 dark:text-slate-400">No hay resultados para esta búsqueda.</p>
      ) : (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Mostrando {products.length} producto{products.length === 1 ? '' : 's'}.
        </p>
      )}
    </div>
  )
}

// Tarjeta de producto
function FeaturedProductCard({ product }) {
  return (
    <article className={`rounded-3xl border border-slate-200/30 bg-linear-to-br ${product.accent} p-px dark:border-white/10`}>
      <div className="h-full rounded-3xl bg-white p-5 dark:bg-slate-950/60 dark:text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">{product.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{product.name}</h3>
          </div>
          <span className="rounded-full border border-slate-200/30 bg-white px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            {product.price}
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">{product.summary}</p>
      </div>
    </article>
  )
}

FeaturedProductsView.propTypes = {
  category: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
    }),
  ).isRequired,
  query: PropTypes.string.isRequired,
}

FeaturedProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
  }).isRequired,
}