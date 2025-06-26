
import TaskCard from '../component/TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/task/TaskContext'
import Loading from '../component/Loading'
import useTitle from '../utils/useTitle'

export default function BrowseTask() {
  useTitle('Browse Task')
  const {tasks, taskLoader} = useContext(TaskContext)
  if(taskLoader) {
    return <Loading></Loading>
  }
  return (
    <>
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold pb-5">Browse Task</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              tasks? (
                tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
              ):(
              <div className="col-span-3 font-bold text-xl">No Task Found</div>
            )
            }
          </div>
        </div>
      </section>
    </>
  )
}
