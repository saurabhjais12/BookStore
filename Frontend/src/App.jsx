
import Home from './Home/Home'

import { Route, Routes } from "react-router-dom"
import Cources from './Cources/Cources'
import Conatacts from './Contact/Conatacts'
import Abouts from "./About/Abouts"
import Login from './Components/Login'
import SignupForm from './Components/SignupForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/>
    <Cource/> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cource' element={<Cources />} />
        <Route path='/contact' element={<Conatacts />} />
        <Route path='/about' element={<Abouts/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/SignupForm' element={<SignupForm/>} />
      </Routes>
    </>
  )
}

export default App
