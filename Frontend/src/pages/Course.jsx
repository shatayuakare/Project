import { useState } from "react"
import Courses from "../api/courses.json"
import PageHead from "../components/PageHead"
import ContentHeading from "../components/ContentHeading"

const Course = () => {
    const [items, setItems] = useState(8);

    const increaseItems = () => {
        setItems(items + 4)
    }

    return (
        <>
            <PageHead title={'Course'} msg="All course" />
            <section className="container mt-5">
                <ContentHeading title={"POPULAR COURSES"} >
                    Choose Our <span>Top Courses</span>
                </ContentHeading>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-6 text-black  mx-auto ">

                    {
                        Courses.slice(0, items).map((elem, idx) => {
                            return (
                                <div className="card bg-white shadow-xl sm:my-3" key={idx}>
                                    <figure className="w-full max-h-60 bg-red-400">
                                        <img className="w-full h-full" src={elem.img} alt={elem.name}
                                            loading="lazy"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{elem.name}</h2>
                                        <p className="line-clamp-2 duration-300 focus:line-clamp-4">
                                            {elem.description}
                                        </p>
                                        <div className="card-actions justify-start">
                                            <a href={elem.url} className="btn bg-green-300 text-black hover:bg-green-400">Buy Now</a>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }


                </div>
                <div className="text-center p-3  my-5">
                    <button className="btn bg-green-500 text-white hover:bg-green-600 px-4 mx-auto"
                        onClick={increaseItems}>
                        Load More
                    </button>
                </div>
            </section>
        </>
    )
}

export default Course