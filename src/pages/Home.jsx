import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { useState } from "react";
import CraftCard from "../components/CraftCard";


const Home = () => {
    const loader = useLoaderData();
    const [crafts , setCrafts] = useState(loader);
    return (
        <div>
           <Banner></Banner>
           <div className='m-20'>
   
      <div className='grid lg:grid-cols-2 gap-4'>
        {
            crafts.map(craft=><CraftCard key={craft._id}
              craft = {craft}
              crafts={crafts}
              setCrafts={setCrafts}
            ></CraftCard>)
        }
      </div>
    </div>
        </div>
    );
};

export default Home;