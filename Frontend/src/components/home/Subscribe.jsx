

const Subscribe = () => {
    return (
        <div className="sm:p-6 md:p-12 text-center flex justify-center bg-green-50">
            <div className="sm-w-full md:w-8/12">
                <h5 className="text-slate-600 font-bold sm:text-3xl md:text-5xl">Subscripbe to our newsletter, We don't make any spam.</h5>
                <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa e maiores, dolor non, tempore molestias sequi?
                </p>
                <form className="sm-w-full md:w-10/12 mx-auto" action="">
                    <span className="input input-bordered border-4 py-6 p-4  rounded-full  pe-0 flex bg-white items-center gap-2 hover:border-green-500 duration-200">
                        <input type="email" className="grow  " placeholder="Enter your email address" />
                        <button className="btn bg-white  hover:text-white hover:bg-green-500 duration-300 text-green-500 rounded-full">
                            <i className='bx p-1 bxl-telegram text-3xl'></i>
                        </button>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Subscribe