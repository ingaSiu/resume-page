import './ProjectCard.css';

const ProjectCard = ({ imageName, title, children }) => {
  return (
    <div className="project-card-wrapper">
      <div>
        <img className="card-img" src={require(`../../assets/images/${imageName}`)} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
