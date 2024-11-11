import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly'; // Import BrowserOnly
import './editProjects.css'; // Import the CSS file

export default function EditProjects() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <EditProjectsContent />}
    </BrowserOnly>
  );
}

function EditProjectsContent() {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tags: '',
    link: '',
    image: '',
  });
  const [projects, setProjects] = useState([]);
  const history = useHistory();

  // Ensure localStorage is accessed only on the client side
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status in useEffect
    if (typeof window !== 'undefined') {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(authStatus);
    }
  }, []);

  // Check if the user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

  // Fetch projects from localStorage or API
  const fetchProjects = () => {
    if (typeof window !== 'undefined') {
      const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
      setProjects(storedProjects);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject({
          ...newProject,
          image: reader.result, 
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding a project
  const handleAddProject = () => {
    const tagsArray = newProject.tags.split(',').map(tag => tag.trim());
    const projectToAdd = { ...newProject, tags: tagsArray };

    // Save project to localStorage
    if (typeof window !== 'undefined') {
      const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
      storedProjects.push(projectToAdd);
      localStorage.setItem('projects', JSON.stringify(storedProjects));
      setNewProject({ title: '', description: '', tags: '', link: '', image: '' });
      fetchProjects();
    }
  };

  // Handle deleting a project
  const handleDeleteProject = (projectToDelete) => {
    if (typeof window !== 'undefined') {
      const updatedProjects = projects.filter(project => project !== projectToDelete);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      setProjects(updatedProjects);
    }
  };

  return (
    <Layout title="Edit Projects">
      <h1>Edit Projects</h1>
      <h2>Add New Project</h2>
      <input
        type="text"
        value={newProject.title}
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        placeholder="Title"
      />
      <input
        type="text"
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        placeholder="Description"
      />
      <input
        type="text"
        value={newProject.tags}
        onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
        placeholder="Tags (comma-separated)"
      />
      <input
        type="text"
        value={newProject.link}
        onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
        placeholder="Project Link (URL)"
      />
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
      />
      {newProject.image && (
        <div>
          <h3>Preview:</h3>
          <img src={newProject.image} alt="Project Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      )}
      <button onClick={handleAddProject}>
        Add Project
      </button>

      <h2>Existing Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Tags:</strong> {Array.isArray(project.tags) ? project.tags.join(', ') : project.tags}</p>
            {project.image && (
              <img src={project.image} alt="Project Image" />
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD
            </a>
            <button onClick={() => handleDeleteProject(project)}>
              Delete Project
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
