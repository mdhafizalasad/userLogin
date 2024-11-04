import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";



  const {signInUser,googleLogin,passwordReset} = useContext(AuthContext) 
  const [userEmail,setUserEmail]=useState('')

    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        if(user){
          alert("User Login sucessfully done");
        }
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        
      });

    };

    // password reset
    const handleEmailBlur =(event)=>{ 
      const email = event.target.value;
      //console.log(email);
      setUserEmail(email);
    };

    const handleForgetPassword=()=>{
      //console.log(userEmail);
      if(!userEmail){
        alert("Please enter an email");
        return;
      }
      passwordReset(userEmail)
      .then(()=>{
        alert('Please check your email and reset password by click the link');
      })
      .catch(error=>{
        console.log(error);
        
      });

    };

    const handleGoogleLogin=()=>{
      googleLogin()
      .then(result=>{
        const user = result.user;
        if(user){
          alert("User Login Successfully");
        }
        console.log(user);
        navigate(form, { replace: true });
        
      })
      .catch(error=>{
        console.log(error);
        
      });
    };

    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col">
 <div className="text-center">
   <h1 className="text-3xl font-bold">Login now!</h1>
  
 </div>
 <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
   <form onSubmit={handleLogin} className="card-body">
    
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password"  name="password" placeholder="Enter Your Password" className="input input-bordered" required />
       <label className="label text-center">
         <a onClick={handleForgetPassword} className="label-text-alt link link-hover">Forget Password</a>
       </label>
       <label className="label text-center">
         <Link to="/sign-up" className="label-text-alt link link-hover">New to Website ? Create an account</Link>
       </label>
     </div>
     <div className="form-control mt-6">
       <input type="submit" value="Login" className="btn btn-outline" />
     </div>
   </form>
   <div className="form-control mt-0 m-8">
                <button onClick={handleGoogleLogin}className="btn btn-outline">Login with Google</button>
              </div>
 </div>
</div>
</div> 
     </div>
    );
};

export default Login;