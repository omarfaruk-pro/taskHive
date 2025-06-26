import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import BrowseTask from "../pages/BrowseTask";
import MyPostedTask from "../pages/MyPostedTask";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import TaskDetails from "../pages/TaskDetails";
import UpdateTask from "../pages/UpdateTask";
import PrivateRoute from "../private/PrivateRoute";
import Loading from "../component/Loading";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {
                index:true,
                Component: Home,
                loader: ()=>fetch('https://taskhiveserver.vercel.app/homeTasks'),
                HydrateFallback: Loading
            },
            {
                path: 'add-task',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: 'browse-task',
                Component: BrowseTask
            },
            {
                path: 'my-posted-task',
                element: <PrivateRoute><MyPostedTask></MyPostedTask></PrivateRoute>
            },
            {
                path:'task-details/:id',
                element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://taskhiveserver.vercel.app/tasks/${params.id}`),
                HydrateFallback: Loading
            },
            {
                path: 'update/:id',
                Component: UpdateTask,
                loader: ({params})=>fetch(`https://taskhiveserver.vercel.app/tasks/${params.id}`),
                HydrateFallback: Loading
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    },
    {
        path: "404",
        Component: NotFound
    }
]);