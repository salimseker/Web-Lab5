import { useState } from 'react'
import ProductList from './components/ProductList.jsx'

function App() {
  const [showProducts, setShowProducts] = useState(false)

  function handleToggleProducts() {
    setShowProducts((prevShowProducts) => !prevShowProducts)
  }

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={handleToggleProducts}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts && <ProductList />}
    </div>
  )
}

export default App
