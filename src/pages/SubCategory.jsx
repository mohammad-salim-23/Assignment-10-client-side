import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCategoryCard from "./SubCategoryCard";

const SubCategory = () => {
  const craft = useLoaderData();
  const {
    name,
    time,
    subcategory,
    rating,
    price,
    details,
    photo,
    _id,
    email,
    stock,
    userName,
  } = craft;
  console.log(craft);

  //  useEffect(() => {
  //     if (subcategory) {
  //         fetch(`https://assignment-10-server-site-black.vercel.app/sub/${subcategory}`)
  //             .then(res => res.json())
  //             .then(data => {
  //                 setCrafts(data);
  //             });
  //     }
  // }, [subcategory]);
  // console.log(crafts)
  return (
    <div className="grid md:grid-cols-2">
      {craft.map((craft) => (
        <SubCategoryCard key={craft._id} craft={craft}></SubCategoryCard>
      ))}
    </div>
  );
};

export default SubCategory;
