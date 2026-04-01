import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Service from './pages/Service'
import Price from './pages/Price'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import ServiceDetails from './pages/ServiceDetails'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/service',
          element: <Service />
        },
        {
          path: '/price',
          element: <Price />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/signUp',
          element: <SignUp />
        },
        {
          path: '/login',
          element: <LogIn />
        },
        {
          path: '/service-detail',
          element: <ServiceDetails />
        }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

