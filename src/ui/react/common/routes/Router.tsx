import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BooksPage } from '../../modules/Books/pages/BooksPage'
import { HomePage } from '../../modules/Home/pages/HomePage'
import { DashboardLayout } from '../layouts/DashboardLayout'

export const Router = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "dashboard",
          element: <HomePage title="Home" />,
          handle: {
            crumb: () => 'Dashboard'
          }
        },
        {
          path: "books",
          element: <BooksPage title="Books" />,
          handle: {
            crumb: () => 'Books'
          }
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}
