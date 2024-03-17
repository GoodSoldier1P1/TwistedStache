import { Routes, Route } from 'react-router-dom'
// import twistedLogo from './Images/twistedLogo.avif'
import './App.css'
import Home from './Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
