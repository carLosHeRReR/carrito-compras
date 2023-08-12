import { Card } from "@mui/material"
import { useEffect, useState } from "react"

export const ComprasPage = () => {

  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    setProductos(data)

  }

  useEffect(() => {
    fetchProductos()

  }, [])

  return (
    <>
      <h1>Compras: </h1>
      <hr />

      {productos.map(producto => (
        <Card
          key={producto.id}
          imagen={producto.image}
          categoria={producto.category}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price} >

        </Card>
      ))}
    </>

  )
}
