import menu from "../api/menu.json";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {

    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser)

    const [sticky, setSticky] = useState(false);

    const logOut = () => {
        try {
            setAuthUser({
                ...authUser,
                User: null
            })
            localStorage.removeItem("User")
            toast.success("User Logout");
            window.location.reload();
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 100) {
                setSticky(true);
            } else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <header className={`text-white p-0 bg-purple-500 duration-300 ease-in-out w-full ${sticky ? "sticky top-0 bg-indigo-600/[0.8] shadow-xl text-black backdrop-blur" : ""} `}>
            <div className="navbar mx-auto py-2 md:py-4 lg:container" >
                <div className="navbar-start text-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost sm:text-white md:text-transparent w-0 md:hidden sm:mx-2 md:p-0 md:m-0 md:h-0 p-2">
                            <i className='bx bx-menu-alt-left text-3xl' ></i>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white">
                            {
                                menu.map((elem, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={elem.path}>{elem.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost px-0 font-bold sm:capitalize sm:ms-5 md:uppercase md:ms-3 text-2xl text-white">
                        <img className="w-10" src="./logo.png" alt="" />
                        Coder Society
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menu.map((elem, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={elem.path}>{elem.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="navbar-end  md:gap-6 lg:gap-8">
                    <div className="grid grid-cols-2 gap-3 shrink-0 sm:hidden lg:flex ">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <i className='bx bx-heart  text-3xl relative pe-2'>
                                    <span className="badge badge-success top-0 right-0 absolute  badge-xs p-2 text-md px-1 text-white font-bold">0</span>
                                </i>
                            </div>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <i className='bx bx-cart-add text-3xl relative pe-2'>
                                    <span className="badge badge-success top-0 right-0 absolute  badge-xs p-2 text-md px-1 text-white font-bold">0</span>
                                </i>
                            </div>
                        </button>
                    </div>
                    {
                        authUser ? <button className="btn hidden bg-green-500 text-white hover:bg-green-700"
                            onClick={logOut}>Logout</button>
                            :
                            <div className="grid md:grid-cols-2 md:gap-2 sm:grid-cols-1 shrink-0 sm:hidden lg:flex">
                                <Link to={'/login'} className="btn bg-green-500 text-white px-8 py-0 rounded-full hover:bg-green-800 hover:skew-y-6">
                                    Login
                                </Link>

                                <Link to={'/register'} className="btn btn-ghost rounded-full px-8 py-0 hover:bg-green-500 hover:skew-y-6">
                                    Sign up
                                </Link>
                            </div>
                    }

                </div>

                <div className="dropdown dropdown-end md:shrink-0 md:hidden sm:flex">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <i className='bx bx-user text-3xl text-white' ></i>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-5 w-52 p-2 shadow bg-white">
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link to={'/register'}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header