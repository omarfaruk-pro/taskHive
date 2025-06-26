import TaskCard from "./TaskCard"
import { Slide } from "react-awesome-reveal";

export default function TaskSection({tasks}) {
    return (
        <>
            <section className="py-20 px-5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl font-bold pb-10">Explore Task</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Slide direction="left"  damping={0.2} duration={1500} fraction={0} >
                        {
                            tasks ? (
                                tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                            ) : (
                                <div className="col-span-3 font-bold text-xl">No Task Found</div>
                            )
                        }
                        </Slide>
                    </div>
                </div>
            </section>
        </>
    )
}
