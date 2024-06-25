import PageHead from "../components/PageHead"
import ContactDetail from "../components/contact/ContactDetail"
import ContactForm from "../components/contact/ContactForm"

const Contact = () => {
    return (
        <>
            <PageHead title="Contact" msg="Get in touch" />
            <section className="sm:container-full  md:container">

                <ContactDetail />
                <ContactForm />
            </section >
        </>
    )
}

export default Contact