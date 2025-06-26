import { Link } from 'react-router'
import notFound from '../assets/images/404.gif'
import { FaArrowLeftLong } from 'react-icons/fa6'
import useTitle from '../utils/useTitle'

export default function NotFound() {
    useTitle('404')
    return (
        <section>
            <div className="max-w-3xl mx-auto min-h-screen flex justify-center items-center py-10">
                <div>
                    <Link to={'/'} className='btn btn-primary mb-2'><FaArrowLeftLong /> Go Home</Link>
                    <img className='max-w-full' src={notFound} alt="" />
                </div>
            </div>
        </section>
    )
}
