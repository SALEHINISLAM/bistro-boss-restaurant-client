import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = (props) => {
  const { signIn, user,googleSignIn, loading } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic=useAxiosPublic();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const captcha = form.get("captcha");
    const logUser = { email, password, captcha };
    
    console.log(logUser);
    if (validateCaptcha(captcha)) {
      const userSignInMessage = signIn(email, password);
      console.log(userSignInMessage);
      if (!loading && user && userSignInMessage!=='error') {
        const userInfo={
          email: email,
          name: user.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
          console.log(res.data)
          navigate(from, { replace: true });
        })
        Swal.fire(`Hi, ${user.displayName}`);
      }
      e.currentTarget.reset();
    } else {
      Swal.fire('Please write the correct captcha')
      return;
    }
  };
  const handleGoogleLogin=()=>{
    const googleLogin=googleSignIn()
    if (!loading && user && googleLogin!=='error') {
      const userInfo={
        email: user.email,
        name: user.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data)
      })
      Swal.fire(`Hi, ${user.displayName}`);
      navigate(from, { replace: true });
    }
    
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

      <div
        className={`bg-[url('https://i.ibb.co/1T60gbP/authentication.png')] min-h-svh w-full md:p-20 pt-28 lg:p-40`}
      >
        <div className="hero md:p-20  shadow-2xl">
          <div className="hero-content flex-col xl:flex-row">
            <div className="text-center">
              <img src="https://i.ibb.co/F7RPTbL/authentication2.png" alt="" />
            </div>
            <div className="card w-full max-w-sm shrink-0">
              <form className="card-body text-black p-0" onSubmit={handleLogin}>
                <h2 className="text-center text-4xl font-bold">Login</h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Captcha</span>
                  </label>
                  <div className="">
                    <LoadCanvasTemplate />
                  </div>

                  <input
                    type="text"
                    placeholder="type the above text"
                    name="captcha"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <p>
                  Do not have an account?{" "}
                  <Link to={"/register"}>Register here</Link>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <p className="py-8 text-center text-gray-700">OR</p>
              <div className="pb-10 flex justify-center items-center">
                <button onClick={handleGoogleLogin} className="text-xl text-center flex justify-center items-center text-black btn btn-outline">
                  <FaGoogle />
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {};

export default Login;
