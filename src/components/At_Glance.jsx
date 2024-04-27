
import { useLottie } from "lottie-react";

const At_Glance = () => {
    
    

  const paintings = [
    {
      title: "Sunset Landscape",
      imageUrl: "https://img.freepik.com/free-vector/silhouette-nature-scene-with-field-trees_1308-46234.jpg?t=st=1714160418~exp=1714164018~hmac=8b022ca2003cde7ac8e4a85758b09881275204be9efb1c51c428f312deabe170&w=900",
    },
    {
      title: "Portrait of a Woman",
      imageUrl: "https://img.freepik.com/premium-photo/hijab-girl-smiling-background_797981-62109.jpg?w=740",
    },
    {
      title: "Still Life with Flowers",
      imageUrl: "https://img.freepik.com/free-photo/beautiful-spring-floral-wallpaper_23-2150725799.jpg?t=st=1714160644~exp=1714164244~hmac=d980856c3dcb2e0ee65bc22952e6ea62e9501c83912134fa3dbe3c296f5923ea&w=360",
    },
    {
      title: "Abstract Artwork",
      imageUrl: "https://img.freepik.com/premium-vector/abstract-texture-background-texture-design_1021328-1174.jpg?w=900",
    },
    {
      title: "Cityscape Sketch",
      imageUrl: "https://img.freepik.com/free-vector/picturesque-cityscape_23-2147555336.jpg?t=st=1714160899~exp=1714164499~hmac=ec5ec5c0aa700a706c352a0a8c4b85d68692ebb4d420f57fc72899726fe2119f&w=740",
    },
  ];
  const options = {
    // animationData:paintings ,
    loop: true
  };
const { View } = useLottie(options);
  return (
    <div className="flex justify-center">
      <div className="mr-5">{View}</div>
      <div>
        {paintings.map((painting, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold mt-3 mb-3 text-center">{painting.title}</h3>
            <div className="flex justify-center">
              <img src={painting.imageUrl} alt={painting.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default At_Glance;
