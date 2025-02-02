import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";



import { AuthContext } from "./AuthProvider";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
    console.log("Salim")
  const { createUser } = useContext(AuthContext);
 const [show,setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if(password.length<6 ){
        Swal.fire({
            title: 'Error!',
            text: 'You must have used  characters',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          
        return;
    }
     if(!passwordRegex.test(password)
    ){
        
        Swal.fire({
            title: 'Error!',
            text: 'you must have one uppercase and one lowercase character',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        return;
    }
    //    create User
    createUser(email, password)
      .then((result) => {
      alert("successfully Register")
          console.log(result.user);
       
          navigate('/signin');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
     
     
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
              <div className="relative">
              <input
                  type={show ? "text":"password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span className="absolute md:left-auto right-32 top-4" onClick={()=>(setShow(!show))}>
                  {
                    show? <FaEyeSlash/> : <FaEye/>
                  }
                </span>
              </div>
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary font-bold">Register</button>
              </div>
            </div>
            </form>
            <p className="text-center mb-2">
        Already have an account{" "}
        <Link className="text-blue-500 font-bold" to="/signin">
          Login
        </Link>
      </p>
          </div>
        </div>
     
     
    </div>
  );
};

export default SignUp;

