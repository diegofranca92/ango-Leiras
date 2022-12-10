import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './pages/Inicio'
import { Capoeira } from './pages/Capoeira'

export function ApplicationRoutes() {
    return(
      <BrowserRouter>
         <Menu/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/capoeira' element={<Capoeira/>}/>
        </Routes>
      </BrowserRouter>
    )
}