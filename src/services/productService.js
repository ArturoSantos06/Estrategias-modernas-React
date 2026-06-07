import { products } from '../examples/products.js'

// Service: centraliza el acceso al catálogo de ejemplo.
export function getProducts() {
  return products
}

// Service: obtiene las categorías disponibles del catálogo.
export function getCategories() {
  return ['Todos', ...new Set(products.map((product) => product.category))]
}
