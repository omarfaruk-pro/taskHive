import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router";
import { useContext } from "react";
import { TaskContext } from "../context/task/TaskContext";
import { AuthContext } from "../context/auth/AuthContext";
import Swal from "sweetalert2";
import useTitle from "../utils/useTitle";



export default function MyPostedTask() {
  useTitle('My Posted Task')
  const { tasks, setTasks } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  const myTask = tasks.filter(task => task.email === user.email);

  const showBid = (count) => {
    Swal.fire(`Total bid ${count}`)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will be deleted permanently. You won't be able to revert!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://taskhiveserver.vercel.app/task/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const remaining = tasks.filter(task => task._id !== id);
              setTasks(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }
  return (
    <>
      <section className="py-20 min-h-[60vh] px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold pb-5">My Posted Task</h2>
          <div className="overflow-x-auto">
            <div className="min-w-3xl">
              <table className="table ">

                <thead>
                  <tr>
                    <th>NO.</th>
                    <th>Name</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    myTask ? (
                      myTask.map((task, index) => {
                        return <tr key={task._id}>
                          <th>{index + 1}</th>
                          <td>
                            <p className="text-xl font-semibold">{task.title}</p>
                          </td>
                          <td>
                            <span className="text-lg font-semibold text-white dark:text-gray-800">${task.budget}</span>
                          </td>
                          <td>
                            <p>{task.deadline}</p>
                          </td>
                          <td>
                            <div className="flex gap-2 justify-end">
                              <button type="button" onClick={() => { showBid(task.bidCount) }} className="btn btn-sm btn-sucess text-base"><FaHeart /></button>
                              <Link to={`/update/${task._id}`} className="btn btn-sm btn-neutral text-base"><FaEdit /></Link>
                              <button type="button" onClick={() => { handleDelete(task._id) }} className="btn btn-primary btn-sm text-base"><MdDeleteForever /></button>
                            </div>
                          </td>
                        </tr>
                      })
                    ) : (
                      <tr><td colSpan='5'>No data found</td></tr>
                    )
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
