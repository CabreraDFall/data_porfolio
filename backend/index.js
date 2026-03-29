const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Public Listing
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await db('projects').select('*').orderBy('index', 'asc');
    
    // Parse JSON fields
    const parsedProjects = projects.map(p => ({
      ...p,
      kpis: JSON.parse(p.kpis || '[]'),
      detailedAnalysis: JSON.parse(p.detailedAnalysis || '{}'),
      tags: JSON.parse(p.tags || '[]'),
      challenges: JSON.parse(p.challenges || '[]')
    }));

    res.json(parsedProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Single Project View
app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await db('projects').where({ id: req.params.id }).first();
    if (!project) return res.status(404).json({ error: 'Project not found' });

    // Parse JSON fields
    const parsedProject = {
      ...project,
      kpis: JSON.parse(project.kpis || '[]'),
      detailedAnalysis: JSON.parse(project.detailedAnalysis || '{}'),
      tags: JSON.parse(project.tags || '[]'),
      challenges: JSON.parse(project.challenges || '[]')
    };

    res.json(parsedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Project (Admin Only concepto)
app.post('/api/projects', async (req, res) => {
  try {
    const projectData = {
      ...req.body,
      kpis: JSON.stringify(req.body.kpis || []),
      detailedAnalysis: JSON.stringify(req.body.detailedAnalysis || {}),
      tags: JSON.stringify(req.body.tags || []),
      challenges: JSON.stringify(req.body.challenges || [])
    };

    await db('projects').insert(projectData);
    res.status(201).json({ message: 'Project created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Project (Admin Only concepto)
app.put('/api/projects/:id', async (req, res) => {
  try {
    const projectData = {
      ...req.body,
      kpis: JSON.stringify(req.body.kpis || []),
      detailedAnalysis: JSON.stringify(req.body.detailedAnalysis || {}),
      tags: JSON.stringify(req.body.tags || []),
      challenges: JSON.stringify(req.body.challenges || [])
    };

    await db('projects').where({ id: req.params.id }).update(projectData);
    res.json({ message: 'Project updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Project (Admin Only concepto)
app.delete('/api/projects/:id', async (req, res) => {
  try {
    await db('projects').where({ id: req.params.id }).del();
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Settings Management
app.get('/api/settings', async (req, res) => {
  try {
    const settings = await db('settings').first();
    if (!settings) return res.status(404).json({ error: 'Settings not initialized' });
    
    // Parse JSON fields
    const parsedSettings = {
      ...settings,
      skills: JSON.parse(settings.skills || '[]')
    };
    
    res.json(parsedSettings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/settings', async (req, res) => {
  try {
    const settingsData = {
      ...req.body,
      skills: JSON.stringify(req.body.skills || [])
    };

    // We only ever have one settings record (id: 1)
    await db('settings').where({ id: 1 }).update(settingsData);
    res.json({ message: 'Settings updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
