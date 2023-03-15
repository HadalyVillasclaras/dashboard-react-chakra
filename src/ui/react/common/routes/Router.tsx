import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddBookPage } from '../../modules/Books/pages/AddBookPage'
import { BooksPage } from '../../modules/Books/pages/BooksPage'
import { HomePage } from '../../modules/Home/pages/HomePage'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { NotFoundPage } from '../pages/NotFoundPage'

export const Router = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      errorElement: <NotFoundPage />,
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
          handle: {
            crumb: () => 'Books'
          },
          children: [
            {
              index: true,
              element: <BooksPage title="Books" />,
            },
            {
              path: "add",
              element: <AddBookPage title="Add" />,
            },
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}
