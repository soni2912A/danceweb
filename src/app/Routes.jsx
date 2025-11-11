import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Class from "../pages/Class"

const RoutesSection = () => {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/class" element={<Class/>}/>

    </Routes>
  )
}

export default RoutesSection