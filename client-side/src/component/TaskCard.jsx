import { Link } from "react-router";
import userImg from '../assets/images/user.png'

export default function TaskCard({task}) {
    const {today, title, budget, description, deadline, photoURL, name} = task
    return (
        <>
            <div className=" bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl shadow-lg p-6 space-y-4">
                <p className="text-sm text-gray-400 dark:text-gray-600"> {today}</p>

                <h2 className="text-2xl font-semibold">{title}</h2>

                <div className="flex justify-between items-center bg-gray-800 dark:bg-gray-200 p-3 rounded-md">
                    <span className="text-sm text-gray-300 dark:text-gray-700">Fixed price project</span>
                    <span className="text-lg font-semibold text-white dark:text-gray-700">${budget}</span>
                </div>

                <p className="text-gray-300 dark:text-gray-800 text-sm">
                    {
                        description.length>120? description.slice(0, 120) + "..." : description
                    }
                </p>

                
                <div>
                    <p ><strong>Deadline:</strong> {deadline}</p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-purple-700 text-white px-2 py-1 rounded-full flex items-center gap-1">
                        📍 Remote
                    </span>
                    <span className="bg-red-700 text-white px-2 py-1 rounded-full flex items-center gap-1">
                        🧰 Intermediate
                    </span>
                    <span className="bg-green-700 text-white px-2 py-1 rounded-full flex items-center gap-1">
                        👤 1 client
                    </span>
                </div>
              

                <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src={photoURL? photoURL : userImg}
                            alt={name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-white dark:text-gray-800">{name}</span>
                    </div>
                    <Link to={`/task-details/${task._id}`} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
                        View Task
                    </Link>
                </div>
            </div>
        </>
    );
}
