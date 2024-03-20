import { Routes, Route } from 'react-router-dom'
// import twistedLogo from './Images/twistedLogo.avif'
import './App.css'
import Home from './Home/Home'
import Story from './Story/Story'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/story' element={<Story />}></Route>
      </Routes>
    </>
  )
}

export default App
