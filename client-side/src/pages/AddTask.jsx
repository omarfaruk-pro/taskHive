import { FaPlus } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import { AuthContext } from '../context/auth/AuthContext';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { TaskContext } from '../context/task/TaskContext';

export default function AddTask() {
  const { user } = useContext(AuthContext);
  const {tasks, setTasks} = useContext(TaskContext);
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const dateFormat = today.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    newTask.photoURL = user.photoURL;
    newTask.today = dateFormat;
    newTask.bidCount = 0;
    fetch('https://taskhiveserver.vercel.app/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          newTask._id = data.insertedId;
          setTasks([...tasks, newTask]);
          form.reset();
          Swal.fire({
            title: "Good job!",
            text: "Task added successfully",
            icon: "success",
            timer: 3000
          });
        }
      })
  }
  return (
    <>
      <section className="">
        <div className="">
          <h2 className=" text-3xl font-bold pb-5">Add a task</h2>
          <form
            onSubmit={handleAddTask}
            className=" p-6 bg-gray-900 dark:bg-gray-100 shadow-md rounded-lg space-y-6 text-white dark:text-gray-800"
          >
            <div>
              <label className="block text-sm font-medium">User Name</label>
              <input
                type="text"
                name="name"
                value={user.displayName}
                readOnly
                className="mt-1 py-2 px-3 block w-full rounded-md bg-gray-700 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-600 text-gray-300 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">User Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                className="mt-1 py-2 px-3 block w-full rounded-md bg-gray-700 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-600 text-gray-300 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Task Title</label>
              <input
                type="text"
                name="title"
                className="mt-1 py-2 px-3 block w-full rounded-md dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                name="category"
                className="mt-1 py-2 px-3 block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Writing">Writing</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Deadline</label>
              <DatePicker name="deadline" minDate={today} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd-MM-yyyy" wrapperClassName="w-full" className="mt-1 py-2 px-3 block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium">Budget ($)</label>
              <input
                type="number"
                name="budget"
                className="mt-1 py-2 px-3 block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                rows="4"
                className="mt-1 py-2 px-3 block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaPlus /> Add Task
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
