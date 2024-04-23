import React from 'react'
import CartIcon from './CartIcon'
import './HeaderButtonCart.css';
export default function HeaderButtonCart() {
  return (
    <div>
       <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
    </div>
  )
}
