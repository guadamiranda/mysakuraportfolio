import { PiFlowerFill } from "react-icons/pi";
import style from './navigator.module.scss'
import React from "react";

type optionsObject = {
    name: string
}

interface PageNavigatorInterface {
    options: Array<optionsObject>
    color: string,
    homeRef: any,
    aboutMeRef: any,
    skillsRef: any
}

const PageNavigator: React.FC<PageNavigatorInterface> = ({color, homeRef, aboutMeRef, skillsRef}) => {
    const scroll = (ref:any) => {
        switch (ref) {
            case "homeRef":
                homeRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "aboutMeRef":
                aboutMeRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "skillsRef":
                skillsRef.current.scrollIntoView({behavior: "smooth"});
                break;
            default:
                break;
        }
    }

    return(
        <div className={style.NavigatorContainer}>
                <div onClick={() => scroll('homeRef')} className={style.NavigatorContainer_options} style={{color: color}}>
                    <div className={style.NavigatorContainer_line} style={{backgroundColor: color}}></div>
                    <div className={style.NavigatorContainer_icon}>
                        <PiFlowerFill />
                    </div>
                    Home
                </div>
                <div onClick={() => scroll('aboutMeRef')} className={style.NavigatorContainer_options} style={{color: color}}>
                    <div className={style.NavigatorContainer_line} style={{backgroundColor: color}}></div>
                    <div className={style.NavigatorContainer_icon}>
                        <PiFlowerFill />
                    </div>
                    Sobre Mi
                </div>
                <div onClick={() => scroll('skillsRef')} className={style.NavigatorContainer_options} style={{color: color}}>
                    <div className={style.NavigatorContainer_line} style={{backgroundColor: color}}></div>
                    <div className={style.NavigatorContainer_icon}>
                        <PiFlowerFill />
                    </div>
                    Mis Proyectos
                </div>
        </div>
    )
}

export default PageNavigator