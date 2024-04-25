import { Link } from 'react-router-dom';
import icon from '../../images/websiteIcon.jpg';
const Navbar = () => {
  const navLinks = <>
    <div className='font-bold md:flex'>
    <li><Link to="/">Home</Link></li>
     <li><Link to="/allArt">All Items</Link></li>
     <li><Link to="/addCraft">Add Craft Items</Link></li>
     <li><Link to="/myCraft">My Craft List</Link></li>
    </div>
  </>
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
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;