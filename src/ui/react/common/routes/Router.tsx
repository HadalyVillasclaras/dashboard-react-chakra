import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddBookPage } from '../../modules/Books/pages/AddBookPage'
import { BookDetailPage } from '../../modules/Books/pages/BookDetailPage'
import { BooksPage } from '../../modules/Books/pages/BooksPage'
import { HomePage } from '../../modules/Home/pages/HomePage'
import { TasksPage } from '../../modules/Tasks/pages/TasksPage'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { NotFoundPage } from '../pages/NotFoundPage'

export const Router = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      // errorElement: <NotFoundPage />,
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
              path: "book/:id",
              element: <BookDetailPage />,
            },
            {
              path: "add",
              element: <AddBookPage title="Add" />,
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
              element: <TasksPage title="Tasks" />
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
