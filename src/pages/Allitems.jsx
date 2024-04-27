import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";
import { useState } from "react";


const Allitems = () => {
    const loader = useLoaderData();
    const [crafts , setCrafts] = useState(loader);
    return (
        <div>
           
           <div className='m-20'>
   
      <div className='grid md:grid-cols-2 gap-4'>
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
export default Allitems;