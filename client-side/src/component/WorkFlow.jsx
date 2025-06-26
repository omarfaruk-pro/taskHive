import { FaCheckCircle, FaUsersCog, FaBell, FaChartLine } from 'react-icons/fa';
import workflowImg from '../assets/images/workflow.jpg'

const Workflow = () => {
    return (
        <section className="py-20 px-5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Streamline Your Workflow</h2>
                        <p className="text-base-content text-lg mb-6">
                            TaskHive helps you stay focused and efficient with intuitive tools that make task management a breeze.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-success mt-1" />
                                <span className="text-base-content">
                                    Prioritize and schedule tasks seamlessly.
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaUsersCog className="text-info mt-1" />
                                <span className="text-base-content">
                                    Collaborate in real time with your team.
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaBell className="text-warning mt-1" />
                                <span className="text-base-content">
                                    Stay on top of deadlines with smart reminders.
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaChartLine className="text-accent mt-1" />
                                <span className="text-base-content">
                                    Track productivity with insightful analytics.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <img
                            src={workflowImg}
                            alt="Team workflow dashboard"
                            className="w-full h-auto rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
