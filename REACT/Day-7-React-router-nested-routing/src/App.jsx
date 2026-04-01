import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Product from "./pages/Product"
import Home from "./pages/Home"
import Layout from "./components/Layout"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/product",
          element: <Product />
        }
      ]
    },


    // {
    //   path: "/product",
    //   element: <Product />
    // }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
