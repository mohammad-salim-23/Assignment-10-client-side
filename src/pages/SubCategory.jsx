import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useLoaderData } from "react-router-dom";

const SubCategory = () => {
   
    const craft = useLoaderData();
    const {name,time,subcategory,rating,price,details,photo,_id,email,stock,userName} = craft;
    
    const [crafts,setCrafts] = useState([]);
   
    useEffect(() => {
        if (subcategory) { 
            fetch(`http://localhost:5000/sub/${subcategory}`) 
                .then(res => res.json()) 
                .then(data => { 
                    setCrafts(data); 
                });
        }
    }, [subcategory]); 
    console.log(crafts)
    return (
        <div>
          <h3>Salim Ali card</h3>  
        </div>
    );
};

export default SubCategory;