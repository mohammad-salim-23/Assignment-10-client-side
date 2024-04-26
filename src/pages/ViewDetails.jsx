import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const craft = useLoaderData();
    const {name,time,subcategory,rating,price,details,photo,_id} = craft;

    return (
        <div className="flex justify-centercenter items-center gap-4">
            <div>
               <img src={photo} alt="" />
            </div>
            <div>
               <h1 className="text-xl font-bold">{name}</h1>
               <h2 className="font-bold">SubCategory Name : {subcategory}</h2>
               <p>{details}</p>
               <h2>Processing Time: {time}</h2>
               <h3>Rating: {rating}</h3>
               <h2 className="font-bold">Price: {price}</h2>
            </div>
            
        </div>
    );
};

export default ViewDetails;