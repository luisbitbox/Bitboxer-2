import React, { useState } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Error } from '../components/pages/Error'
import { Item } from '../components/pages/Item'
import { ItemCard } from '../components/pages/ItemCard'
import { Login } from '../components/pages/Login'
import { NewItem } from '../components/pages/NewItem'
import { NewSupplier } from '../components/pages/NewSupplier'
import { Supplier } from '../components/pages/Supplier'

export const AppRouter = () => {

  const [itemFilter, setItemFilter] = useState(true);

  const handleItemFilter = (filter) => {
    setItemFilter(filter);
  }
  return (
    <BrowserRouter>
    
        {/* Header y navegación*/}
        <Header onItemFilter={handleItemFilter}></Header>

        {/* Contenido central */}
        <div className='content'>

            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/item' element={<Item itemFilter={itemFilter}></Item>}></Route>
                <Route path='/item/:id' element={<ItemCard></ItemCard>}></Route>
                <Route path='/newItem' element={<NewItem></NewItem>}></Route>
                <Route path='/supplier' element={<Supplier></Supplier>}></Route>
                <Route path='/supplier/:id' element={<Supplier></Supplier>}></Route>
                <Route path='/newSupplier' element={<NewSupplier></NewSupplier>}></Route>
                <Route path='/*' element={<Error></Error>}></Route>
            </Routes>

        </div>
    
        {/* Footer */}
        <Footer></Footer>
    </BrowserRouter>
  )
}
