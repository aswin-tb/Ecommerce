import Detail from "./pages/Detail"
import Home from "./pages/Home"
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
    </>
  )
}

export default App
