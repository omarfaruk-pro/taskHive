import { Link, NavLink } from 'react-router'
import logo from '../assets/images/logo.png'
import userImg from '../assets/images/user.png'
import { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from 'react'


export default function Header() {
    const {user, userLogout} = useContext(AuthContext);
    const [menu, setMenu] = useState(false);

    const logout = () => {
        userLogout().then(() => { }).catch(() =>{});
        
    }

    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <>
            <header className="py-4 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to={'/'}><img className='h-8 sm:h-16' src={logo} alt="Logo" /></Link>
                        <nav  className={`absolute -left-full top-0 w-80 h-full bg-black z-10 p-10 lg:p-0 pt-14 lg:pt-0 lg:relative lg:w-auto lg:h-auto lg:bg-transparent lg:left-0 duration-300 ease-in-out  ${menu ? "left-0" : "-left-full"}`}>
                            <div className='text-right lg:hidden'><button className='text-3xl -mr-4 -mt-4 p-4' onClick={() =>{setMenu(!menu)}}><HiMiniXMark /></button></div>
                            <ul className='flex flex-col lg:flex-row gap-10 lg:gap-2  main-menu'>
                                <li><NavLink className='py-2 px-5 rounded-md' to='/'>Home</NavLink></li>
                                <li><NavLink className='py-2 px-5 rounded-md' to='/add-task'>Add Task</NavLink></li>
                                <li><NavLink className='py-2 px-5 rounded-md' to='/browse-task'>Browse Task</NavLink></li>
                                <li><NavLink className='py-2 px-5 rounded-md' to='/my-posted-task'>My Posted Task</NavLink></li>
                            </ul>
                        </nav>
                        {
                            user ? (
                                <div className='relative group flex-grow-1 lg:flex-grow-0 justify-items-end'>
                                    <img className='w-10 h-10 rounded-full object-cover'  src={
                                        user.photoURL ? user.photoURL : userImg
                                    } alt={user.displayName} />
                                    <div className="absolute opacity-0 invisible text-white group-hover:opacity-100 group-hover:visible  rounded-md right-0 text-center bg-black shadow-xl p-4 min-w-50 duration-500 ease-linear z-10">
                                        <p className='text-nowrap'>{user.displayName}</p>
                                        <button onClick={logout} className='cursor pointer btn btn-sm w-full mt-4 btn-primary'>Logout</button>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex gap-3 flex-grow-1 lg:flex-grow-0 justify-end'>
                                    <Link className='btn btn-neutral h-7 sm:h-10 px-3 sm:px-4' to='/login'>Login</Link>
                                    <Link className='btn btn-primary h-7 sm:h-10 px-3 sm:px-4' to='/register'>Register</Link>
                                </div>

                            )
                        }
                        <div className="lg:hidden">
                            <button onClick={handleMenu} type='button' className='p-3 text-3xl'>
                                {
                                    menu ? (
                                        <HiMiniXMark />
                                    ) : (
                                        <RxHamburgerMenu />
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
