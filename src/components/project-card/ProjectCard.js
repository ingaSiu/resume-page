import './ProjectCard.css';

const ProjectCard = ({ imageName, title }) => {
  return (
    <div>
      <div>
        <img src={require(`../../assets/images/${imageName}`)} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
