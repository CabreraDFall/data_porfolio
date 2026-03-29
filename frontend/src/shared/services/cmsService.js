/**
 * CMS Service
 * Connects the frontend to the custom Node/Express/SQLite backend.
 */

const API_BASE_URL = 'http://localhost:5000/api';

export const cmsService = {
  /**
   * Fetches all projects from the SQLite DB
   */
  async getAllProjects() {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`);
      if (!response.ok) throw new Error('Failed to fetch from SQL Engine');
      return await response.json();
    } catch (error) {
      console.error("CMS_FETCH_ERROR:", error);
      throw error;
    }
  },

  /**
   * Fetches a single project by ID
   */
  async getProjectById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`);
      if (!response.ok) throw new Error('Architecture not found in SQL DB');
      return await response.json();
    } catch (error) {
      console.error("CMS_DETAIL_ERROR:", error);
      throw error;
    }
  },

  /**
   * Create a new project (Admin Only)
   */
  async createProject(project) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      return await response.json();
    } catch (error) {
        throw error;
    }
  },

  /**
   * Update an existing project (Admin Only)
   */
  async updateProject(id, project) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      return await response.json();
    } catch (error) {
        throw error;
    }
  },

  /**
   * Decommission an architecture (Admin Only)
   */
  async deleteProject(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
        throw error;
    }
  },

  /**
   * Fetches global portfolio settings
   */
  async getSettings() {
    try {
      const response = await fetch(`${API_BASE_URL}/settings`);
      if (!response.ok) throw new Error('Failed to fetch portfolio settings');
      return await response.json();
    } catch (error) {
       console.error("SETTINGS_FETCH_ERROR:", error);
       throw error;
    }
  },

  /**
   * Updates global portfolio settings (Admin Only)
   */
  async updateSettings(settings) {
    try {
      const response = await fetch(`${API_BASE_URL}/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      return await response.json();
    } catch (error) {
       throw error;
    }
  }
};
