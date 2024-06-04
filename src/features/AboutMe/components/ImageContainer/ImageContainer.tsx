// @ts-ignore
import rin2 from '../../../../../public/Assets/Images/riNAboutMe2.PNG';
import style from "./imageContainer.module.scss";
import ButtonCV from "../ButtonCV/ButtonCV";

interface ImageContainerInterface {
  theme: any;
}

const ImageContainer: React.FC<ImageContainerInterface> = ({ theme }) => {
  return (
    <div data-aos="fade-right">

    
    <div className={style.imageTextContainer} style={{ backgroundColor: theme.greyColor }} >

      <div className={style.imageContainer}>
        <div className={style.imageContainer_image} style={{ height: "100%", width: "100%", backgroundImage: `url(${rin2.src})`, backgroundSize: "cover" }} ></div>
      </div>

      <div className={style.imageTextContainer_text}> 
        <div className={style.imageTextContainer_text_title}>🌸 ¡Hola! ¿Cómo estas? 🌸</div>
        <div className={style.imageTextContainer_text_text}>
            Soy Guadalupe Miranda, <b>Desarrolladora Web Frontend</b> apasionada
            por la creación de experiencias digitales cautivadoras, siempre con
            el cuidado de combinar la estética visual con la funcionalidad
            excepcional.
        </div>
      </div>

      <ButtonCV/>

    </div>
    </div>
  );
};

export default ImageContainer;
