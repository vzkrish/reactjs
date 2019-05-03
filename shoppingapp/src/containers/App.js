import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <h1 className="bg-success text-center">Shopping Cart By Murthy in React and Redux</h1>
    <hr/>
    <div className="bg-info text-center">
    <ProductsContainer />
    </div>
    <hr/>
    <div className="bg-warning">
    <CartContainer />
    </div>
  </div>
)

export default App
