import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../AuthProvider/AuthProvider";


const SignUp = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { createUser } = useContext(DataContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        createUser(email, password)
            .then(res => console.log(res.user))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className=" text-center">New here? <Link to={'/login'}><span className=" ml-5 text-blue-600 underline">Log In</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;