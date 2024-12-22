import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainter from './componentes/ItemListContainter/ItemListContainter'

const App = () => {
  return (
    <>
<NavBar/>
<ItemListContainter prop = "Usando una Prop"/>
    </>
  )
}

export default App