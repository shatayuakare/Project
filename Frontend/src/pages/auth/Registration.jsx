import axios from "axios"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import PageHead from "../../components/PageHead"
import { useState } from "react";
import toast from "react-hot-toast";

const Registration = () => {

    const [type, setType] = useState("password");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password
        }

        await axios.post("http://localhost:4001/auth/register", userInfo).then((res) => {
            if (res.data) {
                toast.success("User Registered Successfully")
            }
            localStorage.setItem("User", JSON.stringify(res.data.user))
        }).catch((err) => {
            toast.error(err.response.data.message)
        })
        window.location.reload();
    };


    return (
        <>
            <PageHead title={'Register '} msg={'Registeration Form'} />
            <section className="container content-center my-5" id="register">

                <div className="shadow-md p-4 pt-8 md:w-6/12 mx-auto bg-white rounded-lg" action="" >
                    <h4 className="text-center text-3xl p-3 pb-0 font-bold">
                        Create A New Account
                    </h4>

                    <form className="p-4" action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text" id="username"
                            placeholder="✍️ Username..."
                            {...register("username", {
                                required: "Username is required field",
                                maxLength: {
                                    value: 12,
                                    message: "Username only 12 character"
                                }
                            })}
                        />
                        <div className="msg">
                            {errors.username && <span>{errors.username.message}</span>}
                        </div>

                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text" id="name"
                            placeholder="😁 Full Name..."
                            {...register("name", {
                                required: "Name is required field"
                            })}
                        />
                        <div className="msg">
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>

                        <label htmlFor="email">Email address</label>
                        <input
                            type="email" id="email"
                            placeholder="📧 Email address..."
                            {...register("email", {
                                required: "Email address is required field"
                            })}
                        />
                        <div className="msg">
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <label htmlFor="password">Password</label>
                        <div className="inputt input-bordered flex items-center ">
                            <input className="w-full p-0.1 m-0" type={type} id="password"
                                placeholder="🗝️ Passsword..."
                                {...register("password", {
                                    required: "Password is required field",
                                    minLength: {
                                        value: 8,
                                        message: "Password at least 8 characters"
                                    }
                                })}
                            />
                            <button
                                type="button"
                                className="btn btn-ghost me-3"
                                onClick={() => (type === "password") ? setType("text") : setType("password")}
                            >
                                <i className='bx bx-show text-2xl'></i>
                            </button>
                        </div>
                        <div className="msg">
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>

                        <button type="submit" className="btn mx-auto bg-green-500 text-white hover:bg-green-600 hover:shadow px-6 text-xl mt-8">
                            Register
                        </button>

                        <div className="text-center text-xl pt-5 text-gray-600">
                            Already have an account?
                            <Link className="text-green-500" to={'/login'}> Login</Link>
                        </div>
                    </form>

                </div>

            </section>
        </>
    )
}

export default Registration