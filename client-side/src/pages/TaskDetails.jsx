import { FaHeart } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import userImg from '../assets/images/user.png'
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../utils/useTitle";
import { TaskContext } from "../context/task/TaskContext";

export default function TaskDetails() {
    const {tasks, setTasks} = useContext(TaskContext);
    const task = useLoaderData();
    const { today, title, category, budget, description, deadline, photoURL, name, email, bidCount } = task
    useTitle(title)
    const [bid, setBid] = useState(bidCount)

    const handleBid = () => {
        setBid(bid + 1);

        fetch(`https://taskhiveserver.vercel.app/tasks/${task._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ bidCount: bid + 1 })
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    task.bidCount = bid + 1;
                    const newTasks = [...tasks, task];
                    const updatedTasks = [...new Map(newTasks.map(obj => [obj._id, obj])).values()];
                    setTasks(updatedTasks);
                    Swal.fire({
                        title: "Bid placed successfully",
                        text: `You bid for ${bid + 1} opportunities.`,
                        icon: "success",
                        timer: 3000
                    })
                }
            })
    }
    return (
        <>
            <section className="py-10 bg-gray-950 dark:bg-gray-50 px-5">
                <div className="  text-white dark:text-gray-900">
                    <div className="max-w-3xl mx-auto bg-gray-900 dark:bg-gray-100 p-8 rounded-xl shadow-lg space-y-6">

                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-400 dark:text-gray-600">Posted on {today}</p>
                                <h1 className="text-3xl font-bold">{title}</h1>
                            </div>
                            <button type="button" onClick={handleBid} className="btn btn-sm btn-neutral text-base "><FaHeart /></button>

                        </div>

                        <div className="flex flex-wrap items-center justify-between bg-gray-800 dark:bg-gray-200 rounded-lg p-4">
                            <div>
                                <p className="text-sm text-gray-300 dark:text-gray-700">Category</p>
                                <p className="font-semibold">{category}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-300 dark:text-gray-700">Budget</p>
                                <p className="text-xl font-bold text-green-400 dark:text-green-600">${budget}</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Task Description</h2>
                            <p className="text-gray-300 dark:text-gray-800 leading-relaxed">{description}</p>
                        </div>

                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold">Deadline</h2>
                            <p className="text-gray-300 dark:text-gray-800">{deadline}</p>
                        </div>


                        {/* User Info */}
                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src={photoURL ? photoURL : userImg}
                                    alt={name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium">{name}</p>
                                    <p className="text-gray-400 dark:text-gray-600 text-sm">{email}</p>
                                </div>
                            </div>
                            <p className="text-xl">
                                Bids {bid}
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
