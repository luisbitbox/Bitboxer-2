import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Error } from '../components/pages/Error'
import { Item } from '../components/pages/Item'
import { ItemCard } from '../components/pages/ItemCard'
import { Login } from '../components/pages/Login'
import { Supplier } from '../components/pages/Supplier'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    
        {/* Header y navegación*/}
        <Header></Header>

        {/* Contenido central */}
        <div className='content'>

            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/item' element={<Item></Item>}></Route>
                <Route path='/item/:id' element={<ItemCard></ItemCard>}></Route>
                <Route path='/supplier' element={<Supplier></Supplier>}></Route>
                <Route path='/*' element={<Error></Error>}></Route>
            </Routes>

        </div>
    
        {/* Footer */}
        <Footer></Footer>
    </BrowserRouter>
  )
}
