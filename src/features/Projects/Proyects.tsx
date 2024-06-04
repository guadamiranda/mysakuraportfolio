import ProjectCard from './Components/ProjectCard/ProjectCard';
import style from './proyects.module.scss';
import projects from './utils/projects';

interface ProyectComponentInterface {
    isDark: boolean,
    theme: any
}

const Proyects: React.FC<ProyectComponentInterface> = ({ isDark, theme }) => {

    return(
        <div className={style.proyectsContainer} style={{backgroundColor: theme.backgroundColor}}>
            <div className={style.proyectsContainer_cards}>
                {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
            </div>
            
        </div>
    )
}

export default Proyects