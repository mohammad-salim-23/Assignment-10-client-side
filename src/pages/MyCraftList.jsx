import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import MyCraftListCard from "../components/MyCraftListCard";


const MyCraftList = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const [crafts,setCrafts] = useState([]);
    // /myCraft/:email
    useEffect(() => {
        if (user?.email) { 
            fetch(`http://localhost:5000/myCraft/${user?.email}`) 
                .then(res => res.json()) 
                .then(data => { 
                    setCrafts(data); 
                });
        }
    }, [user?.email]); 
    console.log(crafts);
    return (
        <div>
            {
                  crafts.map(craft=><MyCraftListCard
                  key={craft._id}
                  craft={craft}
                  crafts = {crafts}
                  setCrafts= {setCrafts}
                  ></MyCraftListCard>)
            }
        </div>

    );
};

export default MyCraftList;