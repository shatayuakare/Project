import ContentHeading from "../ContentHeading"
import features from "../../api/features.json"
import { useState } from "react"

const Feature = () => {
    const [item, setItem] = useState(6);

    const increaseItem = () => {
        setItem(item + 3);
    }

    return (
        <>
            <ContentHeading title={"why choose Coder Society"}>
                Find the <span>Best Feature </span> of Coder Society
            </ContentHeading>

            <div className="grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 ">
                {
                    features.slice(0, item).map((elem, idx) => {
                        return (
                            <div className="card shadow hover:shadow-xl p-2 rounded-none bg-transparent hover:bg-white text-gray-600" key={idx}>
                                <div className="card-body">
                                    <h2 className="card-title capitalize">
                                        <span className={`${elem.color} text-green-700 p-2 px-3 rounded-full`}>
                                            <i className={`${elem.icon} text-4xl`}></i>
                                        </span>
                                        {elem.title}
                                    </h2>
                                    <p className="line-clamp-3">
                                        {elem.description}
                                    </p>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center p-3  my-5">
                <button className="btn bg-green-500 text-white hover:bg-green-600 px-4 mx-auto"
                    onClick={increaseItem}>
                    Load More
                </button>
            </div>
        </>
    )
}

export default Feature