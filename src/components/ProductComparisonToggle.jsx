import { useState } from 'react'

// Render Props: comparte estado y comportamiento a través de una función.
export function ProductComparisonToggle({ children, defaultExpanded = true }) {
  const [showFirstModel, setShowFirstModel] = useState(defaultExpanded)

  function toggleModel() {
    setShowFirstModel((currentValue) => !currentValue)
  }

  return children({ showFirstModel, toggleModel })
}