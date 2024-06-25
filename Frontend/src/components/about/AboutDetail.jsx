import { Link } from "react-router-dom"
import aboutDetail from "../../api/aboutDetail.json"

const AboutDetail = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-6 p-2">
            {
                aboutDetail.map((elem, i) => {
                    return (
                        <div className="card text-gray-500 rounded-[50] border-b-4 border-indigo-500 p-4 pb-8 sm:my-2 bg-white" key={i}>
                            <div className="card-body">
                                <h4 className="text-2xl text-gray-800">
                                    {elem.title}
                                </h4>
                                {elem.description}
                            </div>
                            <div className="card-actions ps-8">
                                <Link to={'course'} className="btn btn-main">
                                    Explore
                                    <i className='bx bx-right-arrow-alt text-2xl'></i>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AboutDetail