

const ContentHeading = ({ children, title }) => {
    return (
        <div className="py-10 px-4 content-heading">
            <div className="uppercase text-green-500">
                {title} _______________
            </div>
            <h5 className="sm:text-2xl md:text3xl lg:text-4xl text-gray-600 font-bold font-['Cinzel_Decorative']">
                {children}.
            </h5>
        </div>
    )
}

export default ContentHeading 