import { useState } from 'react'
import ProductList from './components/ProductList.jsx'

function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [name, setName] = useState('')

  function handleToggleProducts() {
    setShowProducts((prevShowProducts) => !prevShowProducts)
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={handleToggleProducts}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      <div>
        <label htmlFor="nameInput">Your name: </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name"
        />
      </div>

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  )
}

export default App
