import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { useState, useEffect } from "react"; 
import CraftCard from "../components/CraftCard";

const Home = () => {
    const loader = useLoaderData();
    const [crafts , setCrafts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        if (loader.length > 0) {
            setCrafts(loader);
            setLoading(false); 
        }
    }, [loader]); 

    return (
        <div>
           <Banner></Banner>
           <div className='m-20'>
               {loading ? (
                 <>
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                 </>
               ) : (
                   <div className='grid lg:grid-cols-2 gap-4'>
                       {crafts.map(craft => (
                           <CraftCard 
                               key={craft._id}
                               craft={craft}
                               crafts={crafts}
                               setCrafts={setCrafts}
                           ></CraftCard>
                       ))}
                   </div>
               )}
           </div>
        </div>
    );
};

export default Home;
