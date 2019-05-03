import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Add some products to cart.</em>
  )

  return (
    <div>
      <h3 className="bg-success">Your Cart Info:</h3>
      <div>{nodes}</div>
      <p className="bg-primary">Total: Rs. {total}</p>
      <button onClick={onCheckoutClicked} className="bg-warning"
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout Now
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
