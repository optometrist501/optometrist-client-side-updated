import React from 'react';
import userIcone from '../../images/User_icon_2.svg.png';
import navbar from './Navbar.module.css'
import Infobar from '../infoBar/Infobar';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const Navbar = ({ setDarkmode, darkmode }) => {

    const [signOut] = useSignOut(auth);

    const handleDarkMode = () => {
        console.log('hello')
        if (darkmode === false) {
            setDarkmode(true)
        } else if (darkmode === true) {
            setDarkmode(false)
        }
    }
    return (
        <div className={navbar.navbarTheMain}>
            <Infobar></Infobar>
            <div className={navbar.navbarTheContainer}>
                <div style={{ transition: '1s ease-in-out', height: '67px' }} className={`navbar ${darkmode ? `${navbar.module_border_wrap}  ` : `${navbar.module_border_wrap}`} `}>

                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul style={{ zIndex: 25 }} tabIndex="0" className={`menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52 ${darkmode ? 'bg-blue-950 text-white border-2 border-white' : 'shadow bg-base-100'}`}>
                                <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/'>Home</Link></li>
                                <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/blogs'>Blogs</Link></li>
                                <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/publication'>Publications</Link></li>
                                <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/gallery'>Gallery</Link></li>
                                <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/events'>Events</Link></li>
                                <li><a className={`${darkmode && 'hover:text-orange-500'} `} href='##'>Member Login</a></li>
                                <li>
                                    <a href='##'>view more</a>
                                    <ul className="p-2">
                                        <li>
                                            <span> <i class="uil uil-user-plus"></i> <Link to='/myProfile' className={`${darkmode && 'hover:text-orange-500'} `} >profile</Link></span>
                                        </li>
                                        <li>
                                            <span className={`${darkmode && 'hover:text-orange-500'} `} ><i class="uil uil-setting"></i><Link to='./dashboard'>Dashboard</Link></span>
                                        </li>
                                        <li>
                                            <span><i class="uil uil-signin"></i><Link className={`${darkmode && 'hover:text-orange-500'} `} to='./login'>Login</Link></span>
                                        </li>

                                        <li>
                                            <span
                                                onClick={async () => {
                                                    const success = await signOut();
                                                    if (success) {
                                                        alert('You are sign out');
                                                    }
                                                }}
                                            ><i class="uil uil-signout"></i> <a className={`${darkmode && 'hover:text-orange-500'} `} href='###'>Logout</a></span>
                                        </li>
                                        <li>
                                            <span className={`${darkmode && 'hover:text-orange-500'} `} onClick={handleDarkMode} ><i class={`uil ${darkmode ? 'uil-brightness-low' : 'uil-moon'}`}></i>{darkmode ? <p>Light mode</p> : <p>Dark mode</p>}</span>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Logo</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className={`menu menu-horizontal px-2 font-medium  ${darkmode && 'text-white '}`}>

                            <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/'>Home</Link></li>
                            <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/blogs'>Blogs</Link></li>
                            <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/publication'>Publications</Link></li>
                            <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/gallery'>Gallery</Link></li>
                            <li><Link className={`${darkmode && 'hover:text-orange-500'} `} to='/events'>Events</Link></li>


                        </ul>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={userIcone} alt=''></img>
                                </div>
                            </label>
                            <ul style={{ transition: '1s ease-in-out' }} tabindex="0" className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${darkmode ? 'bg-blue-950 text-white border-white border-2' : 'bg-base-100'} `}>
                                <li>
                                    <span className={`${darkmode && 'hover:text-orange-500'} `}> <i class="uil uil-user-plus"></i> <Link to='/myProfile'  >profile</Link></span>
                                </li>
                                <li>
                                    <span className={`${darkmode && 'hover:text-orange-500'} `} ><i class="uil uil-setting"></i><Link to='./dashboard'>Dashboard</Link></span>
                                </li>
                                <li>
                                    <span><i class="uil uil-signin"></i><Link className={`${darkmode && 'hover:text-orange-500'} `} to='./login'>Login</Link></span>
                                </li>
                                <li>
                                    <span className={`${darkmode && 'hover:text-orange-500'} `}>
                                        <i class="uil uil-user-square"></i>
                                        <a href='##'>Member Login</a>
                                    </span>
                                </li>
                                <li>
                                    <span
                                        onClick={async () => {
                                            const success = await signOut();
                                            if (success) {
                                                alert('You are sign out');
                                            }
                                        }}
                                        className={`${darkmode && 'hover:text-orange-500'} `}><i class="uil uil-signout"></i> <a href='###'>Logout</a></span>
                                </li>
                                <li>
                                    <span className={`${darkmode && 'hover:text-orange-500'} `} onClick={handleDarkMode} ><i class={`uil ${darkmode ? 'uil-brightness-low' : 'uil-moon'}`}></i>{darkmode ? <p>Light mode</p> : <p>Dark mode</p>}</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;