import Topbar from '../components/topbar/Topbar.js';
import { useParams } from 'react-router-dom';
import { getProject } from '../func/projectsFunc.js';

const AboutProject = () => {
  const { id } = useParams();
  const project = getProject(Number(id));
  return (
    <div>
      <Topbar />
      <div>
        <img className="project-img" src={require(`../assets/images/${project.imageName}`)} alt="" />
      </div>
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
    </div>
  );
};
export default AboutProject;
