import ProjectCard from '../components/project-card/ProjectCard.js';
import Topbar from '../components/topbar/Topbar.js';
import { projectData } from '../data/projectData.js';
const Home = () => {
  return (
    <div>
      <Topbar />
      <h2>My projects</h2>
      <div className="projects-cards">
        <ProjectCard imageName={projectData[0].imageName} title={projectData[0].title} />
      </div>
    </div>
  );
};
export default Home;
