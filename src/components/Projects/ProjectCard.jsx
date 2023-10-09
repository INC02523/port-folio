import { getImageUrl } from "../../utils"
import PropTypes from 'prop-types'
import styles from '../Projects/ProjectCard.module.css'

const ProjectCard = ({project}) => {
    console.log(project);
    const {title, imageSrc, description, skills, demo, source} = project

    const skillsList = Array.isArray(skills) ? skills.map((skill, id) => (
        <li key={id} className={styles.skill}>
            {skill}
        </li>
    )) : null;
  return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skillsList}
                </ul>
                <div className={styles.links}>
                    <a className={styles.link} href={demo}>Demo</a>
                    <a className={styles.link} href={source}>Source</a>
                </div>
        </div>
  )
}

ProjectCard.propTypes = undefined;

export default ProjectCard