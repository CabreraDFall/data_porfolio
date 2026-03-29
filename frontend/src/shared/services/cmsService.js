/**
 * CMS Service
 * Simulates a Headless CMS interaction by fetching project data from a static JSON endpoint.
 */

const DATA_URL = '/data/projects.json';

export const cmsService = {
  /**
   * Fetches all projects from the "CMS"
   * @returns {Promise<Array>} List of project objects
   */
  async getAllProjects() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
      }
      return await response.ok ? response.json() : [];
    } catch (error) {
      console.error("CMS_SERVICE_ERROR:", error);
      throw error;
    }
  },

  /**
   * Fetches a single project by ID
   * @param {string} id - The project identifier
   * @returns {Promise<Object|null>} The matching project or null
   */
  async getProjectById(id) {
    const projects = await this.getAllProjects();
    return projects.find(p => p.id === id) || null;
  }
};
