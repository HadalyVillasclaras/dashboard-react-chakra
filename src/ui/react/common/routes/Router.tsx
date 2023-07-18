import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BookAddPage } from '../../modules/Books/pages/BookAddPage'
import { BookDetailPage } from '../../modules/Books/pages/BookDetailPage'
import { BookEditPage } from '../../modules/Books/pages/BookEditPage'
import { BooksHomePage } from '../../modules/Books/pages/BooksHomePage'
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
              element: <BookDetailPage />,
              handle: {
                crumb: () => 'Detail'
              },
            },
            {
              path: "add",
              element: <BookAddPage />,
              handle: {
                crumb: () => 'Add'
              },
            },
            {
              path: "edit/:id",
              element: <BookEditPage />,
              handle: {
                crumb: () => 'Add'
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
