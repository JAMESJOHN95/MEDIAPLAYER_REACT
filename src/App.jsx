import './App.css'
import {Route,Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Watch from './Pages/Watch'
import Header from './Componants/Header'
import Footer from './Componants/Footer'

function App() {

  return (
    <>
    <Header/>
    {/* <h1>Media Player</h1> */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Watch' element={<Watch/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
