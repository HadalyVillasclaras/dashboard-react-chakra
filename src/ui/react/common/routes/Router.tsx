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
              element: <BooksPage/>,
            },
            {
              path: "view/:id",
              element: <BookDetailPage />,
              handle: {
                crumb: () => 'Detail'
              },
            },
            {
              path: "add",
              element: <AddBookPage />,
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
              element: <TasksPage/>
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
