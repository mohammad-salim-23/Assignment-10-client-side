import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import MyCraftListCard from "../components/MyCraftListCard";

const MyCraftList = () => {
  console.log("Hello batija")
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-10-server-site-black.vercel.app/myCraft/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCrafts(data);
        });
    }
  }, [user?.email]);
  console.log(crafts);

  const filteredCrafts =
    filter === "All"
      ? crafts
      : crafts.filter((craft) => craft.customization === filter);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <label
            className="text-xl font-bold text-center"
            htmlFor="customization"
          >
            Filter by Customization:{" "}
          </label>
          <select
            id="customization"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filteredCrafts.map((craft) => (
          <MyCraftListCard
            key={craft._id}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
