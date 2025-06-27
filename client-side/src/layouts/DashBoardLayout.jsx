import { Outlet } from "react-router";
import Footer from "../default/Footer";
import Header from "../default/Header";
import { NavLink } from 'react-router';
import { FaHome, FaTasks, FaPlus } from 'react-icons/fa';

export default function DashBoardLayout() {
    const navLinkClasses = "flex items-center gap-2 px-4 py-2 rounded-md text-gray-200 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-700";
    return (
        <>
            <Header></Header>
            <div className="flex max-w-7xl mx-auto min-h-[55dvh] gap-10 py-5">
                <div className="w-full max-w-80 bg-gray-900 dark:bg-gray-200 rounded-t-md">
                    <aside className="sticky top-0">
                        <nav className="d-nav flex flex-col gap-4 p-4 h-full">
                            <NavLink to="/dashboard/overview" className={navLinkClasses}>
                                <FaHome className="text-lg" />
                                <span>Overview</span>
                            </NavLink>

                            <NavLink to="/dashboard/my-posted-task" className={navLinkClasses}>
                                <FaTasks className="text-lg" />
                                <span>My Posted Task</span>
                            </NavLink>

                            <NavLink to="/dashboard/add-task" className={navLinkClasses}>
                                <FaPlus className="text-lg" />
                                <span>Add Task</span>
                            </NavLink>
                        </nav>
                    </aside>
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
