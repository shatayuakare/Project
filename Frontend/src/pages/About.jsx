import Feature from "../components/about/Feature"
import PageHead from "../components/PageHead"
import TeamMember from "../components/about/TeamMember"
import Career from "../components/about/Career"
import AboutDetail from "../components/about/AboutDetail"

const About = () => {

    return (
        <>
            <PageHead title="About" msg="About us" />
            <AboutDetail />
            <section className="md:container sm:container-full">
                <Career />
                <Feature />
                <TeamMember />
            </section>
        </>
    )
}

export default About