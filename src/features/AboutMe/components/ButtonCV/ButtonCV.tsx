import style from './buttonCV.module.scss'

const ButtonCV = () => {
    return(
        <button className={style.buttonStyle} onClick={() => window.open("https://drive.google.com/file/d/1GPjrvwIvTTF8rW5giElUDd2aa_i64kaf/view?usp=sharing", "_blank")}>
            Ver CV
        </button>
    )
}

export default ButtonCV