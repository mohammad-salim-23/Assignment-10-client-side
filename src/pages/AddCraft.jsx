import Swal from "sweetalert2";
const AddCraft = () => {
    const handleAddCraft  = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const time = form.time.value;
        const subcategory = form.subcategory.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;
        // const email = form.email.value;
        // const stock = form.stock.value;
        // const userName = form.userName.value;

        const newCraft = {
            name,time,subcategory,rating,price,details,photo,
        };
        console.log(newCraft);
        fetch(`http://localhost:5000/craft`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "Coffee Added Successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                  });
            }
        })
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Craft</h2>
      <form onSubmit={handleAddCraft}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Craft Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Craft Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory"
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8 md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">stockStatus</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="stock"
                placeholder="Stock Status"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
       
        <div className="mb-8 md:flex"> 
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="User Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>


        <input  type="submit" value="Add Craft" className="btn btn-block bg-primary" />
      </form>
    </div>
        </div>
    );
};

export default AddCraft;