// editProjects.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '@theme/Layout';
import axios from 'axios';
import './editProjects.css';

export default function EditProjects() {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tags: '',
    link: '',
    image: '',
  });
  const [projects, setProjects] = useState([]);
  const history = useHistory();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    } else {
      fetchProjects(); // Fetch projects on load
    }
  }, [isAuthenticated, history]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getProjects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

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

  const handleAddProject = () => {
    const tagsArray = newProject.tags.split(',').map(tag => tag.trim());
    const projectToAdd = { ...newProject, tags: tagsArray };
  
    // Save to localStorage
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    storedProjects.push(projectToAdd);
    localStorage.setItem('projects', JSON.stringify(storedProjects));
  
    // Update state to reflect the added project
    setProjects(storedProjects);
    setNewProject({ title: '', description: '', tags: '', link: '', image: '' }); // Reset input fields
  };
  

  const handleDeleteProject = async (projectToDelete) => {
    try {
      await axios.delete(`http://localhost:3001/deleteProject`, { data: { id: projectToDelete.id } });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
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
