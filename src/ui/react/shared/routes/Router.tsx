import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BooksCreatePage } from '../../modules/Books/pages/BooksCreatePage'
import { BooksDetailPage } from '../../modules/Books/pages/BooksDetailPage'

import { BooksHomePage } from '../../modules/Books/pages/BooksHomePage'
import { BooksUpdatePage } from '../../modules/Books/pages/BooksUpdatePage'
import { HomePage } from '../../modules/Home/pages/HomePage'
import { TasksPage } from '../../modules/Tasks/pages/TasksPage'
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
              element: <BooksHomePage />,
            },
            {
              path: "detail/:id",
              element: <BooksDetailPage />,
              handle: {
                crumb: () => 'Detail'
              },
            },
            {
              path: "add",
              element: <BooksCreatePage />,
              handle: {
                crumb: () => 'Add'
              },
            },
            {
              path: "edit/:id",
              element: <BooksUpdatePage />,
              handle: {
                crumb: () => 'Edit'
              },
            },
          ]
        },
        {
          path: "tasks",
          handle: {
            crumb: () => 'Tasks'
          },
          children: [
            {
              index: true,
              element: <TasksPage />
            }
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}
