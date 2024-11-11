// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/getProjects', (req, res) => {
  fs.readFile('projects.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read projects' });
    res.json(JSON.parse(data));
  });
});

app.post('/saveProject', (req, res) => {
  const newProject = req.body;
  fs.readFile('projects.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read projects' });
    const projects = JSON.parse(data);
    projects.push(newProject);
    fs.writeFile('projects.json', JSON.stringify(projects), (writeErr) => {
      if (writeErr) return res.status(500).json({ error: 'Failed to save project' });
      res.json({ success: true });
    });
  });
});

app.put('/editProject', (req, res) => {
  const editedProject = req.body;
  fs.readFile('projects.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read projects' });
    const projects = JSON.parse(data);
    const index = projects.findIndex((proj) => proj.id === editedProject.id);
    projects[index] = editedProject;
    fs.writeFile('projects.json', JSON.stringify(projects), (writeErr) => {
      if (writeErr) return res.status(500).json({ error: 'Failed to save project' });
      res.json({ success: true });
    });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
