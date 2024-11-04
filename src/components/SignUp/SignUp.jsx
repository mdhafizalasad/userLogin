import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // error state
  const [signUpError,setSignUpError]= useState('')

  const {createUser,googleLogin,updateUserName,verifyEmail} = useContext(AuthContext)
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if(!/(?=.*?[A-Z])/.test(password)){
      setSignUpError("Please provide one Uppercase Letter")
      return
    }

    if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      setSignUpError("Please provide at least one special character of # ? ! @ $ % ^ & * - ")
      return
    }
    if(password.length < 6 ){
      setSignUpError("Please provide at least 6 characters")
      return
    }

    setSignUpError('')
    

    createUser(email,password)
    .then(result =>{
      const user = result.user;
      // if(user){
      //   alert("User Created Successfully")
      // }
      console.log(user);
      form.reset();
      setSignUpError("");
        //verify email
        verifyEmail();
      // update user 
      updateUserName(name);
      navigate(from, { replace: true });

      
    })
    .catch(error=>{
      //console.log(error.message);
      setSignUpError(error.message);
    });
  };

 

  const handleGoogleSignUp=()=>{
    googleLogin()
    .then(result=>{
      const user = result.user;
      if(user){
        alert("User Created Successfully");
      }
      console.log(user);
      navigate(from, { replace: true });
      
    }).catch(error=>{
      console.log(error);
      
    });
  };
  
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
        
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
          </div>
          <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />

                {
                  signUpError && <p className="text-red-500">{signUpError}</p>
                }
                <label className="label text-center">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account? Please login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-outline"
                />
              </div>
              
            </form>

            <div className="form-control mt-0 m-8">
                <button onClick={handleGoogleSignUp}className="btn btn-outline">Login with Google</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
