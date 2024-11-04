import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

// const Header = (name) => {
const Header = () => {

   const {user,logOut} = useContext(AuthContext)

   //console.log(user);
   

    return (
        <div className="navbar bg-black text-white">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">User Auth</NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={ user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Name
            <span className="badge">{user?.displayName ? user?.displayName : "No Name"}</span>
          </a>
        </li>
        <li><a>{user?.email}</a></li>
        <li>{user?.uid ? <a onClick={logOut}>Logout</a> : <Link to='/login' >Login</Link>}</li>
      </ul>
    </div>
          </ul>
        </div>
      </div>
    );
};

export default Header;



