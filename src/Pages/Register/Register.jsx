import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = (props) => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (validateCaptcha(data.captcha)) {
      const user = createUser(data.email, data.password, data.name);
      console.log(user);
    } else {
      Swal.fire("Please enter valid captcha");
      return;
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  //   const handleRegister=(e)=>{
  //     e.preventDefault();
  //     const form=new FormData(e.currentTarget)
  //     const name=form.get('name');
  //     const email=form.get('email');
  //     const password=form.get('password');
  //     const captcha=form.get('captcha');
  //     const user={name,email,password,captcha};
  //     console.log(user)
  //     if (validateCaptcha(captcha)) {
  //         alert('good')
  //         e.currentTarget.reset()
  //     }else{
  //         alert('sorry');
  //         return
  //     }
  //   }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div
        className={`bg-[url('https://i.ibb.co/1T60gbP/authentication.png')] min-h-svh w-full md:p-20 pt-28 lg:p-40`}
      >
        <div className="hero md:p-20  shadow-2xl">
          <div className="hero-content flex-col xl:flex-row-reverse">
            <div className="text-center">
              <img src="https://i.ibb.co/F7RPTbL/authentication2.png" alt="" />
            </div>
            <div className="card w-full max-w-sm shrink-0">
              <form
                className="card-body text-black p-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* <form className="card-body text-black p-0" onSubmit={handleRegister}> */}
                <h2 className="text-center text-4xl font-bold">Register</h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered bg-white"
                    //required
                  />
                </div>
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Name is required
                  </p>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered bg-white"
                    //required
                  />
                </div>
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Email is required
                  </p>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    })}
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered bg-white"
                    //required
                  />
                </div>
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600">
                    Password must be greater than 6 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-600">
                    Password must have 1 uppercase, 1 lowercase, 1 number and 1
                    special character
                  </p>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Captcha</span>
                  </label>
                  <div className="">
                    <LoadCanvasTemplate />
                  </div>

                  <input
                    {...register("captcha", { required: true })}
                    type="text"
                    placeholder="type the above text"
                    name="captcha"
                    className="input input-bordered bg-white"
                    //required
                  />
                </div>
                {errors.captcha?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Captcha is required
                  </p>
                )}
                <p>
                  Already have an account? <Link to={"/login"}>Login here</Link>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Register.propTypes = {};

export default Register;
