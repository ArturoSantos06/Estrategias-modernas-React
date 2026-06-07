# Apple Studio

Aplicación pequeña en React y Tailwind CSS que demuestra patrones modernos (HOCs, Render Props, Context, Hooks y code-splitting).

## Qué incluye

- Componentes contenedores y presentacionales para el catálogo
- Higher-Order Component para acceso premium
- Render Props para la comparación iPhone / Mac
- Hooks personalizados para persistencia y búsqueda
- Context API para el tema global
- Code Splitting con `React.lazy()` y `Suspense`

## Estructura del proyecto

- `src/components`: componentes visuales (header, tarjetas, botones, etc.)
- `src/context`: contexto global del tema
- `src/hooks`: hooks reutilizables (p. ej. `useLocalStorage`)
- `src/pages`: páginas de la app (p. ej. `AppleShowcasePage.jsx`)
- `src/services`: lógica de acceso a datos (p. ej. `productService.js`)
- `src/examples`: datos de ejemplo y utilidades
