import style from './infiniteScroll.module.scss';
import skills from '../../constant/skills';

interface InfiniteScrollInterface {
    isDark: boolean
}

const InfiniteScroll: React.FC<InfiniteScrollInterface> = ({isDark}) => {
    const whiteGradiant = 'radial-gradient(circle, rgba(0,0,0,0) 63%, #f0f2f2 100%)'
    const blackGradiant = 'radial-gradient(circle, rgba(0,0,0,0) 63%, #4A4A4A 100%)'

    return(
        <div className={style.infiniteScrollContainer}>
            <div className={style.infiniteScrollContainer_opacity} 
                style={{background: isDark ? blackGradiant : whiteGradiant}} >
            </div>
            <div className={style.infiniteScrollContainer_listContainer}>
                    {skills.map((skill, index) => <div className={style.infiniteScrollContainer_items} key={index}>{skill}</div>)}
             </div>
        </div>
    )
}

export default InfiniteScroll