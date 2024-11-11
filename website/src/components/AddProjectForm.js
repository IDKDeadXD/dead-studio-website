import React, { useState } from 'react';

const AddProjectForm = ({ addProject }) => {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tags: '',
    author: '',
    image: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject({ ...newProject, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = newProject.tags.split(',').map((tag) => tag.trim());
    addProject({ ...newProject, tags: tagsArray });
    setNewProject({ title: '', description: '', tags: '', author: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newProject.title}
        onChange={handleInputChange}
        placeholder="Project Title"
        required
      />
      <input
        type="text"
        name="description"
        value={newProject.description}
        onChange={handleInputChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="tags"
        value={newProject.tags}
        onChange={handleInputChange}
        placeholder="Tags (comma-separated)"
        required
      />
      <input
        type="text"
        name="author"
        value={newProject.author}
        onChange={handleInputChange}
        placeholder="Author"
        required
      />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {newProject.image && (
        <div>
          <h3>Preview:</h3>
          <img
            src={newProject.image}
            alt="Project Preview"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        </div>
      )}
      <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>
        Add Project
      </button>
    </form>
  );
};

export default AddProjectForm;
