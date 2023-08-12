import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CarritoPage } from "./pages/CarritoPage"
import { ComprasPage } from "./pages/ComprasPage"

export const CarritoApp = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
          <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}