import contactDetail from "../../api/contactDetail.json"

const ContactDetail = () => {


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:mt-10 md:gap-8 p-2">

            {
                contactDetail.map((elem, idx) => {
                    return (
                        <div className="card  text-center" key={idx}>
                            <div className="card-body" >
                                <span className="text-green-500 text-5xl">
                                    <i className={elem.icon}></i>
                                </span>
                                <h5 className="text-2xl font-semibold">
                                    {elem.title}
                                </h5>
                                <p className="text-gray-600">
                                    {elem.data.map((ele, i) => {
                                        return (
                                            <span key={i}>{ele} <br /></span>
                                        )
                                    })}
                                </p>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default ContactDetail