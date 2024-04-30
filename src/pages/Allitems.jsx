import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";
import { useState } from "react";


const Allitems = () => {
    const loader = useLoaderData();
    if(!loader){
      <>
      <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
      </>
    }
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