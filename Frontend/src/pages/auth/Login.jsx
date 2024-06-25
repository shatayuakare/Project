import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import PageHead from "../../components/PageHead"
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const [type, setType] = useState("password");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/auth/login", userInfo).then((res) => {
            // console.log(res.data)
            if (res.data) {
                toast.success("Login Successfully")
                // alert("Login Succeessfully")
            }
            localStorage.setItem("User", JSON.stringify(res.data.user))
            window.location.reload();
        }).catch((err) => {
            if (err.response) {
                toast.error(err.response.data.message)
                // console.log(err.response.data.message)
            }
        })
    };

    return (
        <>
            <PageHead title="Login" msg={"Login form"} />
            <section className="container content-center p-1" id="login">

                <div className="shadow-md p-4 pt-8 sm-w-full md:w-6/12 mx-auto bg-white rounded-lg" action="" >
                    <h4 className="text-center text-3xl p-3 pb-0 font-bold">
                        Already A Member? Sign In
                    </h4>

                    <form className="p-4" action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email address</label>
                        <input
                            type={"email"} id="email"
                            placeholder="✍️ Email address..."
                            {...register("email", {
                                required: "Email is required field"
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

                        <button className="btn mx-auto bg-green-500 text-white hover:bg-green-600 hover:shadow px-6 text-xl mt-8">
                            Login
                        </button>

                        <div className="text-center text-xl pt-5 text-gray-600">
                            Don't have an account?
                            <Link className="text-green-500" to={'/register'}> Register Now</Link>
                        </div>

                    </form>

                </div >

            </section >
        </>
    )
}

export default Login