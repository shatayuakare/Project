import { Link, useLocation } from "react-router-dom"

const PageHead = ({ title, msg }) => {
    const loc = useLocation();



    return (
        <div className="hero sm:min-h-80 p-4 lg:min-h-96 bg-[url('https://images.unsplash.com/photo-1603201667230-bd139210db18?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative"
        >
            <div className="h-full w-full absoulte top-0 left-0 bg-black bg-opacity-65">

            </div>
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <h4 className=" sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white uppercase">{msg}</h4>
                    <div className="breadcrumbs text-lg border-y-2 text-slate-400">
                        <ul className="justify-center">
                            <li><Link to={'/'}>Home</Link></li>
                            <li>
                                <Link to={loc.pathname}>{title}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHead