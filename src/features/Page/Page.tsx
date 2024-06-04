'use client'
import PageNavigator from '../../Components/Navigator/Navigator'
import ThemeSwitch from '@/Components/ThemeSwitch/ThemeSwitch';
import Divisor from '@/Components/Divisor/Divisor';
import { ThemeContext } from '@/context/themes';
import Proyects from '../Projects/Proyects';
import { useContext, useRef } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import HomeComponent from '../Home/Home';
import style from './page.module.scss';

const PageComponent = () => {
    const data = [{ name: "Home" }, { name: "Sobre Mi" }, { name: "Proyectos" }];
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);

    return(
        <div className={style.pageContainer}>
            <ThemeSwitch changeState={toggleTheme} isDark={isDark} />
            <PageNavigator homeRef={homeRef} aboutMeRef={aboutMeRef} skillsRef={skillsRef} options={data} color={theme.color} />
            <div ref={homeRef}><HomeComponent  isDark={isDark} theme={theme}/></div>
            <div ref={aboutMeRef}><AboutMe isDark={isDark} theme={theme} /></div>
            <Divisor />
            <div ref={skillsRef}><Proyects isDark={isDark} theme={theme}/></div>
        </div>
    )
}

export default PageComponent