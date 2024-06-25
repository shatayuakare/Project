import Career from "../components/about/Career"
import AboutDetail from "../components/about/AboutDetail"
import Feature from "../components/about/Feature"
import Main from "../components/home/Main"
import Subscribe from "../components/home/Subscribe"

const Home = () => {
    return (
        <main className="mx-auto bg-white">
            <Main />
            <AboutDetail />
            <section className="sm:container-full md:container">
                <Career />
                <Feature />
            </section>
            <Subscribe />
        </main>
    )
}

export default Home