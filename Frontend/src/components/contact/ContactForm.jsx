import { useForm } from "react-hook-form"


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="p-5 bg-white shadow-md my-6">

            <h5 className="text-center text-5xl text-slate-600 font-bold my-4">Send Your Message</h5>
            <form className="container" action="" onSubmit={handleSubmit(onSubmit)}>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-6">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"
                            placeholder="😁 Full name..."
                            {...register("name", { required: { value: true, message: "Name is Required field" } })}
                        />

                        <div className="msg">
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email"
                            placeholder="📧 Email address..."
                            {...register("email", { required: "Email address is Required field" })}
                        />
                        <div className="msg">
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                    </div>
                </div>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject"
                    placeholder="🤔 Subject..."
                    {...register("subject", { required: "Subject is required field" })}
                />
                <div className="msg">
                    {errors.subject && <span>{errors.subject.message}</span>}
                </div>

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"
                    placeholder="✍️ Message..."
                    {...register("message", { required: "Message is required field" })}
                />
                <div className="msg">
                    {errors.message && <span>{errors.message.message}</span>}
                </div>

                <button className="btn mx-auto bg-green-500 text-white hover:bg-green-600 hover:shadow px-6 text-xl mt-8">
                    Send Message
                </button>


            </form >
        </div >
    )
}

export default ContactForm