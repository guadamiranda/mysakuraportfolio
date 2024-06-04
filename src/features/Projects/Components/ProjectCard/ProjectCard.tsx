import { PiFlowerLotus } from "react-icons/pi";
import style from './projectCard.module.scss';
import { IoMdFlower } from "react-icons/io";

interface Projects {
    name: string,
    state: string,
    description: string,
    tecnology: Array<any>,
    img: any,
    repository: string,
    demo: string
}

interface ProjectCardInterface {
    project: Projects
}

const ProjectCard: React.FC<ProjectCardInterface> = (project) => {

    return(
        <div className={style.projectCardContainer}>
            <div className={style.projectCardContainer_imgContainer}>
                <PiFlowerLotus className={style.projectCardContainer_imgContainer_icon}/>
                <div className={style.projectCardContainer_imgContainer_tecnology}>
                    {project.project.tecnology.map((project, index) => <div className={style.projectCardContainer_imgContainer_tecnology_pin}>{project}</div>)}
                </div>
                <img src={project.project.img}/>    
            </div>
            <div className={style.projectCardContainer_textContainer}>
                <div className={style.projectCardContainer_textContainer_header}>
                    <div className={style.projectCardContainer_textContainer_header_title}><IoMdFlower /> {project.project.name}</div>
                    <div className={style.projectCardContainer_textContainer_header_state}>{project.project.state}</div>
                </div>
                <div className={style.projectCardContainer_description}>{project.project.description}</div>
                <div className={style.projectCardContainer_buttons}>
                    <button onClick={() => window.open(project.project.demo, "_blank")}>Demo</button>
                    <button onClick={() => window.open(project.project.repository, "_blank")}>Repositorio</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard