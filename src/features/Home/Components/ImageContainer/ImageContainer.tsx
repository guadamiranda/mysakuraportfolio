import rinHome1 from "../../../../../public/Assets/Images/rinHome1.jpg";
import rinHome2 from "../../../../../public/Assets/Images/rinHome2.png";
import style from "./imageContainer.module.scss";
import { useEffect, useState } from "react";

const ImageContainer = () => {
  const [profileImage, setProfileImage] = useState("");
  const profileImages = [rinHome1, rinHome2];

  const selectHomeProfileImage = () => {
    const randomArrayIndex = Math.floor(Math.random() * 2);
    setProfileImage(profileImages[randomArrayIndex].src);
  };

  useEffect(() => {
    selectHomeProfileImage();
  });

  return (
    <div className={style.imageContainer}>
      <div className={style.imageContainer_borderRotation}></div>
      <div className={style.imageContainer_image}></div>
    </div>
  );
};

export default ImageContainer;
