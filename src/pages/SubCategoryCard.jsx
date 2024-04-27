/* eslint-disable react/prop-types */


const SubCategoryCard = ({craft}) => {
    const {name,time,subcategory,rating,price,details,photo,_id,email,stock,userName} = craft;
     console.log(craft)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{_id}</h2>
    <p>{name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubCategoryCard;
