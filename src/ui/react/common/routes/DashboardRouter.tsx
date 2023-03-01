import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../modules/Home/pages/HomePage";
import { TasksPage } from "../../modules/Tasks/pages/TasksPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { NotFoundPage } from "../pages/NotFoundPage";

export const DashboardRouter = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </DashboardLayout>
  )
}