
import { Link } from "react-router-dom";
import icon from "../../images/websiteIcon.jpg";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    localStorage.setItem('theme',theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',localTheme);
  },[theme])

  const handleToggle = e=>{
     if(e.target.checked){
      setTheme('dark')
     }else{
      setTheme('light')
     }
  }

  const navLinks = (
    <>
      <div className="font-bold md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allArt">All Items</Link>
        </li>
        <li>
          <Link to="/addCraft">Add Craft Items</Link>
        </li>
        <li>
          <Link to="/Craft">My Craft List</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/glance">At a Glance Creations</Link>
        </li>
      </div>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogOut successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch();
  };

  return (
    <div className='md:pl-5 md:pr-5'> {/* Apply dark mode class */}
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghostmd:hidden lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex">
            <img className="w-8 mt-3 md:w-10 md:h-10" src={icon} alt="" />
            <a className="btn btn-ghost text-xl">BrushBlend</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div>
          
         
        </div>
        <div className="navbar-end flex gap-2">
        <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" onChange={handleToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
          {user ? (
            ""
          ) : (
            <Link>
              <button
                className="btn "
                style={{ backgroundColor: "#e57b12" }}
              >
                SignUp
              </button>
            </Link>
          )}

          {user ? (
            <Link>
              <button
                className="btn  btn-warning"
                onClick={handleLogOut}
              >
                SignOut
              </button>
            </Link>
          ) : (
            <Link to="/signin">
              <button
                className="btn font-bold"
                style={{ backgroundColor: "#249898" }}
              >
                SignIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
