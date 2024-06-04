import { PiFlowerFill } from 'react-icons/pi';
import style from './themeSwitch.module.scss';
import { useState } from 'react';

interface SwitchInterface {
    changeState: any,
    isDark: any
}

const ThemeSwitch: React.FC<SwitchInterface> = ({changeState, isDark}) => {
    const [esSeleccionado, setEsSeleccionado] = useState(false)
    const [primerClick, setEsPrimerClick] = useState(false)

    const circuloStyle = esSeleccionado
        ? `${style.themeSwitchContainer__circulo} ${style.themeSwitchContainer__circuloSi}`
        : (primerClick ? `${style.themeSwitchContainer__circulo} ${style.themeSwitchContainer__circuloNo}` : `${style.themeSwitchContainer__circulo}`);

    const cambiarPosicionCirculo = () => {
        setEsPrimerClick(true)
        changeState(!esSeleccionado)
        setEsSeleccionado(!esSeleccionado)
    }

    return(
        <div className={`${style.themeSwitchContainer}`} onClick={cambiarPosicionCirculo} style={{backgroundColor: isDark? 'rgb(255 255 255 / 76%)' : 'rgb(0 0 0 / 64%)'}}>
            <div style={{position: 'relative'}}>
                <div className={circuloStyle}> 
                    <PiFlowerFill className={`${style.themeSwitchContainer__icon}`}/> 
                </div>
            </div>
        </div>
    )
}

export default ThemeSwitch