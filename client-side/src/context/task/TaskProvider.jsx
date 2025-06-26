
import { useState } from "react";
import { useEffect } from "react";
import { TaskContext } from "./TaskContext";

export default function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);
    const [taskLoader, setTaskLoader] = useState(true);
    const [taskError, setTaskError] = useState(null);
    useEffect(()=>{
        fetch('https://taskhiveserver.vercel.app/tasks')
        .then(res => res.json())
        .then(data => {
            setTasks(data)
            setTaskLoader(false)
        })
    },[])

    const taskInfo ={
        tasks,
        setTasks,
        taskLoader,
        setTaskLoader,
        taskError,
        setTaskError
    }
  return (
    <TaskContext value={taskInfo}>
        {children}
    </TaskContext>
  )
}
