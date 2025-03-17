import { Link } from 'react-router-dom';
import './projects.css'; // Import the external CSS file

const Projects = () => {
  const projectList = [
    { id: 1, name: 'Quiz Game', description: 'A simple quiz game.', link: '/projects/Quiz' },
    { id: 2, name: 'Todo List', description: 'A simple Todo list.', link: '/Projects/todo' },
    { id: 3, name: 'Calculator', description: 'A simple calculator with modern UI.', link: '/Projects/Calculator' },
    { id: 4, name: 'Guess it', description:'A simple guessing game.', link: '/Projects/Guess'},

  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link !== '#' ? (
              <Link to={project.link}>
                <button className="view-button">View Project</button>
              </Link>
            ) : (
              <button className="view-button">View Project</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
