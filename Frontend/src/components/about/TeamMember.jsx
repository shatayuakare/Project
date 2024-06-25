import ContentHeading from "../ContentHeading"


const TeamMember = () => {
    return (
        <>
            <ContentHeading title={'team member'}>
                Our Expert <span className="underline text-green-500">
                    Instructors
                </span>
            </ContentHeading>

            <div className="grid sm:grid-cols-1  md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8  ">

                <div className="card mx-4">
                    <div className="relative -bottom-4 -z-1">
                        <div className="left-0 -bottom-6 h-64 max-w-64 mx-auto rounded-full overflow-hidden">
                            <img className="h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                        </div>
                    </div>

                    <div className="card-body bg-white z-0 text-center p-5 rounded-xl">
                        <h2 className="text-xl font-bold">Shatayu Akare</h2>
                        <p className="text-lg uppercase text-gray-500">developer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMember