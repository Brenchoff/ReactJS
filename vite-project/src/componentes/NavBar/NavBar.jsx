import React from 'react'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Pilates clásico Tienda</h1>

        <nav>
            <ul>
                <li>Equipos</li>
                <li>Repuestos</li>
                <li>Accesorios</li>
            </ul>
        </nav>
<CartWidget/>

    </header>

  )
}

export default NavBar