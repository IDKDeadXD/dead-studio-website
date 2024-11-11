// projects.js
import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '../components/projectCard';
import axios from 'axios';
import './projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getProjects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Layout title="Projects">
      <div className="projects-container">
        <h1>Projects</h1>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </Layout>
  );
}
