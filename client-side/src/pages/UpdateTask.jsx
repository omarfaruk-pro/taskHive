
import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { TaskContext } from "../context/task/TaskContext";
import useTitle from "../utils/useTitle";

export default function UpdateTask() {
    const today = new Date();
    const task = useLoaderData();
    const {tasks, setTasks} = useContext(TaskContext);
    const { budget, category, deadline, description, email, name, title, _id } = task;
    const [day, month, year] = deadline.split("-");
    const parsedDate = new Date(`${year}-${month}-${day}`);
    const [startDate, setStartDate] = useState(parsedDate);
    useTitle(title)


    const handleUpdateTask = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries());

        fetch(`https://taskhiveserver.vercel.app/tasks/${task._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    updatedTask._id = _id;
                    const newTasks = [...tasks, updatedTask];
                    const updatedTasks = [...new Map(newTasks.map(obj => [obj._id, obj])).values()];
                    setTasks(updatedTasks);
                    Swal.fire({
                        title: "Good job!",
                        text: "Task updated successfully",
                        icon: "success",
                        timer: 2000,
                    });
                }
            });
    }
    return (
        <>
            <section className="py-20 px-5">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-center text-4xl font-extrabold pb-5">Update task</h2>
                    <form
                        onSubmit={handleUpdateTask}
                        className="max-w-xl mx-auto p-6 bg-gray-900 dark:bg-gray-100 shadow-md rounded-lg space-y-6 text-white dark:text-gray-800"
                    >

                        <div>
                            <label className="block text-sm font-medium">User Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                readOnly
                                className="mt-1 px-3 py-2  block w-full rounded-md bg-gray-700 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-600 text-gray-300 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">User Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                readOnly
                                className="mt-1 px-3 py-2  block w-full rounded-md bg-gray-700 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-600 text-gray-300 cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Task Title</label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={title}
                                className="mt-1 px-3 py-2 block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Category</label>
                            <select
                                name="category"
                                className="mt-1 px-3 py-2  block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                required
                                defaultValue={category}
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
                            <DatePicker minDate={today} selected={startDate} dateFormat="dd-MM-yyyy" onChange={(date) => setStartDate(date)} name="deadline" wrapperClassName="w-full" className="mt-1  px-3 py-2  block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Budget ($)</label>
                            <input
                                type="number"
                                name="budget"
                                defaultValue={budget}
                                className="mt-1 px-3 py-2  block w-full rounded-md bg-gray-800 border border-gray-700 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 text-white focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                name="description"
                                rows="6"
                                defaultValue={description}
                                className="mt-1 px-3 py-2  block w-full rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        > Update Task
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
