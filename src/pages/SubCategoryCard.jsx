/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const SubCategoryCard = ({craft}) => {
    const {name,time,subcategory,rating,price,details,photo,_id,email,stock,userName} = craft;
     console.log(craft)
    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{subcategory}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div> */}
   <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3 className="text-xl font-bold">SubCategory; {subcategory}</h3>
    <p>Price : {price}</p>

    <div className="card-actions justify-end">
    <div className="join flex gap-3">
  <Link to={`/details/${_id}`}> <button className="btn  bg-primary">View Details</button></Link>
 
  <Link to={`/updateCraft/${_id}`}><button className="btn ">Update</button></Link>
  {/* <button onClick={()=>handleDelete(_id)} className="btn  btn-warning">Delete</button> */}
</div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SubCategoryCard;
