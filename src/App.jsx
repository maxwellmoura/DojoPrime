import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './pages/NavBar/NavBar'
import Home from './pages/Home/Home'
import Footer from './pages/Footer/Footer'
import Conteudo from './pages/Conteudo/Conteudo'
import Atletas from './pages/Atletas/Atletas'
import About from './pages/About/About'
import Shop from './pages/Loja/Shop'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Conteudo' element={<Conteudo />} />
            <Route path='/Atletas' element={<Atletas />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/About' element={<About />} />

          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
