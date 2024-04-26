import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";


const MyCraftList = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const [item,setItem] = useState([]);
    // /myCraft/:email
    useEffect(() => {
        if (user?.email) { 
            fetch(`http://localhost:5000/myCraft/${user?.email}`) 
                .then(res => res.json()) 
                .then(data => { 
                    setItem(data); 
                });
        }
    }, [user?.email]); 
    console.log(item);
    return (
        <div>
            <h3>My List</h3>
        </div>
    );
};

export default MyCraftList;