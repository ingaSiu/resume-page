import ProjectCard from '../components/project-card/ProjectCard.js';
import Topbar from '../components/topbar/Topbar.js';
import Button from '../components/Button/Button.js';

import { projectData } from '../data/projectData.js';
import { getData } from '../func/projectsFunc.js';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const data = getData();
  const navigate = useNavigate();
  return (
    <div>
      <Topbar />
      <h2>My projects</h2>
      <div className="projects-cards">
        {data.map((item) => (
          <ProjectCard key={item.id} imageName={item.imageName} title={item.title}>
            <Button btnText="Click for more..." onClick={() => navigate(`/projects/${item.id}`)} />
          </ProjectCard>
        ))}
        <ProjectCard imageName={projectData[0].imageName} title={projectData[0].title} />
      </div>
    </div>
  );
};
export default Home;
