import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = (props) => {
    useEffect(() => {
        loadCaptchaEnginge(6);
      }, []);
      const handleLogin=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget)
        const email=form.get('email');
        const password=form.get('password');
        const captcha=form.get('captcha');
        const user={email,password,captcha};
        console.log(user)
        if (validateCaptcha(captcha)) {
            alert('good')
            e.currentTarget.reset()
        }else{
            alert('sorry');
            return
        }
      }
  return (
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

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
