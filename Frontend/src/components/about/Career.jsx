import ContentHeading from "../ContentHeading"

const Career = () => {
    return (

        <div className="grid md:grid-cols-2 md:gap-4 my-6">
            <div className="my-auto w-fit">
                <img className="" src="https://bestwpware.com/html/tf/penn/assets/images/all-img/about2.png" alt="" loading="lazy" />
            </div>
            <div className="md:p-5">
                <ContentHeading title={''}>
                    Learn New Skills To Go <span>Ahead For Your</span> Career
                </ContentHeading>

                <p className="text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolorem nihil, similique quibusdam optio totam non dicta numquam veritatis ex eos obcaecati voluptatibus rem ab!
                </p>

                <div className="card card-side duration-300 shadow hover:border-l-4 hover:border-blue-500 bg-white">
                    <figure className="sm:w-60 md:w-48">
                        <span className="ms-4 h-fit text-green-700">
                            <i className='bx bx-medal rounded-full  text-3xl  p-4 py-3 bg-blue-100'></i>
                        </span>
                    </figure>
                    <div className="card-body sm:p-4 md:p-6">
                        <h2 className="card-title">Our Mission</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae est libero, veritatis rerum quae minima.</p>

                    </div>
                </div>
                <div className="card card-side duration-300 shadow hover:border-l-4 hover:border-blue-500 mt-4 bg-white">
                    <figure className="sm:w-60 md:w-48">
                        <span className="ms-4 h-fit text-yellow-500">
                            <i className='bx bxs-bulb rounded-full  text-3xl  p-4 py-3 bg-blue-100'></i>
                        </span>
                    </figure>
                    <div className="card-body sm:p-4 md:p-6">
                        <h2 className="card-title">Our Mission</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae est libero, veritatis rerum quae minima.</p>

                    </div>
                </div>

                <button className="btn bg-green-500 text-white hover:bg-green-600 mt-8">
                    Discover More
                </button>
            </div>
        </div>

    )
}

export default Career