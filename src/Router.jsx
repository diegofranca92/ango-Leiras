import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './pages/Inicio'
import { Capoeira } from './pages/Capoeira'
import { Grupo } from './pages/Grupo'
import { Footer } from './components/Footer'


export function ApplicationRoutes() {
    return(
      <BrowserRouter>
         <Menu/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/capoeira' element={<Capoeira/>}/>
            <Route path='grupo/:id' element={<Grupo/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}