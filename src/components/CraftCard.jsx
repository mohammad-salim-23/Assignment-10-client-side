

import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CraftCard = ({craft,crafts,setCrafts}) => {
    // eslint-disable-next-line react/prop-types
    const {name,time,subcategory,rating,price,details,photo,_id} = craft;

    const handleDelete = (_id)=>{
        console.log(_id);
        
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3 className="text-xl font-bold">SubCategory; {subcategory}</h3>
    <p>Price : {price}</p>

    <div className="card-actions justify-end">
    <div className="join flex gap-3">
  <Link to={`details/${_id}`}> <button className="btn  bg-primary">View Details</button></Link>
 
  <Link to={`updateCraft/${_id}`}><button className="btn ">Update</button></Link>
  <button onClick={()=>handleDelete(_id)} className="btn  btn-warning">Delete</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CraftCard;