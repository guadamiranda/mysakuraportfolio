import lightWallpaper from "../../../public/Assets/Images/homeImgLight.jpg";
import darkWallpaper from "../../../public/Assets/Images/homeImgDark.jpg";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import HomeTitle from "./Components/HomeTitle/HomeTitle";
import { FaLinkedin } from "react-icons/fa";
import style from "./home.module.scss";

interface HomeComponentInterface {
  isDark: boolean;
  theme: any;
}
const HomeComponent: React.FC<HomeComponentInterface> = ({ isDark, theme }) => {
  const wallpaper = isDark ? darkWallpaper.src : lightWallpaper.src;

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className={style.homeComponentContainer}
    >
      <div className={style.homeComponentContainer_opacity}>
        <div className={style.homeComponentContainer_body}>
          <ImageContainer />
          <br></br>
          <HomeTitle />
          <div className={style.homeComponentContainer_subTitule}>
            <span className={style.homeComponentContainer_subTitule_icon}>🌸</span>
            <span className={style.homeComponentContainer_subTitule_title}> Frontend Developer </span>
            <span className={style.homeComponentContainer_subTitule_icon}>🌸</span>
          </div>
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/guadalupe-miranda-7b3599267/"
              )
            }
            className={style.homeComponentContainer_linkedInIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
