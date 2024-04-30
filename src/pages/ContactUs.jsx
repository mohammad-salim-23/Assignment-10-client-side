import { Fade } from "react-awesome-reveal";
import icon from "../../images/websiteIcon.jpg"
import LottieReact from "../components/LottieReact";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },2000);

    return ()=>clearTimeout(timer);
  },[])
    return (
      <div className="hero min-h-screen bg-base-200">
        <Fade cascade damping={0.3}>
          <div className="hero-content flex-col lg:flex-row">
            <img src={icon} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <div className="w-60">
                <LottieReact></LottieReact>
              </div>
              <h1 className="text-5xl font-bold">BrushBlend</h1>
              <p className="py-6">A vibrant online gallery celebrating the beauty of painting and drawing.</p>
              <h2 className="text-xl">Location: Dhanmondi, 124</h2>
              <h2 className="font-medium">Email: BrushBlend@support123@gmail.com</h2>
            </div>
          </div>
        </Fade>
      </div>
    );
  };
  
  export default ContactUs;
  
