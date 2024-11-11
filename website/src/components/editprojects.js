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
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
    useEffect(() => {
      if (!isAuthenticated) {
        history.push('/login');
      }
    }, [isAuthenticated, history]);
  
    // Fetch projects from the server
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3001/getProjects');
        const data = await response.json();
        setProjects(data); // Set the fetched projects in state
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };
  
    // Call fetchProjects once when the component mounts
    useEffect(() => {
      fetchProjects();
    }, []);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewProject({
            ...newProject,
            image: reader.result, // Save the base64 image data
          });
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleAddProject = async () => {
      const tagsArray = newProject.tags.split(',').map(tag => tag.trim());
      const projectToAdd = { ...newProject, tags: tagsArray };
  
      try {
        const response = await fetch('http://localhost:3001/saveProject', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectToAdd),
        });
  
        if (response.ok) {
          setNewProject({ title: '', description: '', tags: '', link: '', image: '' }); // Clear form
          fetchProjects(); // Refresh the project list
        } else {
          console.error('Failed to save project');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <Layout title="Edit Projects">
        <h1>Edit Projects</h1>
        {/* Input fields and form for adding projects */}
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
        <button onClick={handleAddProject}>Add Project</button>
  
        <h2>Existing Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Tags:</strong> {Array.isArray(project.tags) ? project.tags.join(', ') : project.tags}</p>
              {project.image && <img src={project.image} alt="Project Image" />}
              <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
  