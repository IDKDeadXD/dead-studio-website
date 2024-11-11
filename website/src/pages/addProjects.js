// src/pages/addProjects.js
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '@theme/Layout';

export default function AddProjects() {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tags: '',
    link: '',
    image: '',
  });

  const handleSubmit = async () => {
    const tagsArray = newProject.tags.split(',').map(tag => tag.trim());
    const projectToAdd = { ...newProject, tags: tagsArray };

    try {
      await axios.post('http://localhost:3001/saveProject', projectToAdd);
      setNewProject({ title: '', description: '', tags: '', link: '', image: '' });
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleAddProject = () => {
    const tagsArray = newProject.tags.split(',').map(tag => tag.trim());
    const projectToAdd = { ...newProject, tags: tagsArray };
  
    // Save project to localStorage
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    storedProjects.push(projectToAdd);
    localStorage.setItem('projects', JSON.stringify(storedProjects));
  
    // Immediately update the local projects list on the frontend
    setProjects(storedProjects); // Update state
    setNewProject({ title: '', description: '', tags: '', link: '', image: '' }); // Reset input fields
  };
  

  return (
    <Layout title="Add Project">
      <div>
        <h1>Add New Project</h1>
        <input type="text" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} placeholder="Title" />
        <input type="text" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} placeholder="Description" />
        <input type="text" value={newProject.tags} onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })} placeholder="Tags (comma-separated)" />
        <input type="text" value={newProject.link} onChange={(e) => setNewProject({ ...newProject, link: e.target.value })} placeholder="Project Link (URL)" />
        <button onClick={handleSubmit}>Add Project</button>
      </div>
    </Layout>
  );
}
