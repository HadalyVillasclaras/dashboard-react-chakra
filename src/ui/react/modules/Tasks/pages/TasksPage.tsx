import { Subheader } from "../../../common/components/modules/subheader/Subheader"
import { TaskContainer } from "../components/TaskContainer"

export const TasksPage = ({title}: any) => {
  return (
    <>
        <Subheader title={title}/>
        <TaskContainer/>
    </>
  )
}
