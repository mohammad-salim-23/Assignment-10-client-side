// primary color :#249898
import { Link } from 'react-router-dom';
import icon from '../../images/websiteIcon.jpg';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2'
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const navLinks = <>
    <div className='font-bold md:flex'>
    <li><Link to="/">Home</Link></li>
     <li><Link to="/allArt">All Items</Link></li>
     <li><Link to="/addCraft">Add Craft Items</Link></li>
     <li><Link to="/Craft">My Craft List</Link></li>
     <li><Link to="/contact">Contact Us</Link></li>
     <li><Link to="/glance">At a Glance Creations</Link></li>
    </div>
  </>
  const handleLogOut=()=>{
    logOut()
    .then(res=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogOut successfully",
        showConfirmButton: false,
        timer: 2000
      });
    })
    .catch();
  }
  return (
    <div className='pl-5 pr-5'>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
   <div className='flex'>
    <img className='w-10' src={icon} alt="" />
   <a className="btn btn-ghost text-xl">BrushBlend</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    {
      user?"":<Link><button className='btn 'style={{ backgroundColor: '#e57b12'
    }}>SignUp</button></Link>
    }
  
    {
      user?<Link><button className='btn  btn-warning'  onClick={handleLogOut}>SignOut</button></Link>: <Link to='/signin'><button className='btn font-bold' style={{ backgroundColor: '#249898' }}>SignIn</button></Link>
    }
   
  
  </div>
</div>
    </div>
  );
};

export default Navbar;