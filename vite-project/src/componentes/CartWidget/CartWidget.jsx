import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
const imgCarrito =" data:image/png;base64,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"
  return (
    <div>
       <img className="ImgCarrito" src={imgCarrito} alt="imagen del carrito"/>
       
        </div>
  )
}

export default CartWidget