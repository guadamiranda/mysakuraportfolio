import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import style from "./aboutMe.module.scss";

interface AboutMeInterface {
  isDark: boolean;
  theme: any
}

const AboutMe: React.FC<AboutMeInterface> = ({ isDark, theme }) => {

  return (
    <>
     <div className={style.aboutMeContainer} style={{backgroundColor: theme.backgroundColor}}>
        <ImageContainer theme={theme} />
        <InfiniteScroll isDark={isDark} />
    </div>
    </>
   
  );
};

export default AboutMe;