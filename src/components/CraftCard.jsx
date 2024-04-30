import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CraftCard = ({ craft, crafts, setCrafts }) => {
  console.log("CRAFT ", craft);
  // eslint-disable-next-line react/prop-types
  const { name, time, subcategory, rating, price, details, photo, _id } = craft;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-site-black.vercel.app/craft/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // eslint-disable-next-line react/prop-types
              const remaining = crafts.filter((craft) => craft._id !== _id);
              setCrafts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Link to={`sub/${craft?.subcategorySlug}`}>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="img-style" src={photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <h3 className="text-xl font-bold">SubCategory: {subcategory}</h3>
              <p>Price : {price}</p>

              <div className="card-actions justify-end">
                <div className="join flex gap-3">
                  <Link to={`/details/${_id}`}>
                    {" "}
                    <button className="btn  bg-primary">View Details</button>
                  </Link>

                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div></div>
    </div>
  );
};

export default CraftCard;
