import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const craft = useLoaderData();
    if(!craft){
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
    const {name,time,subcategory,rating,price,details,photo,_id,email,stock,userName} = craft;
    console.log(craft);

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
               <h2 className="text-gray-400">stockStatus: {stock}</h2>
               <h2 className="font-bold">Price: {price}</h2>
            </div>
            
        </div>
    );
};

export default ViewDetails;