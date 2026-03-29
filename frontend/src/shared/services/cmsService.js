import { supabase } from '../../lib/supabaseClient';

export const cmsService = {
  /**
   * Fetches all projects from Supabase
   */
  async getAllProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('index', { ascending: true });
        
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error("SUPABASE_FETCH_ERROR:", error);
      return [];
    }
  },

  /**
   * Fetches a single project by ID
   */
  async getProjectById(id) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();
        
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("SUPABASE_SINGLE_FETCH_ERROR:", error);
      return null;
    }
  },

  /**
   * Creates a new project in Supabase (Postgres)
   */
  async createProject(project) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([project])
        .select();
        
      if (error) throw error;
      return data[0];
    } catch (error) {
       throw error;
    }
  },

  /**
   * Updates an existing project (Admin Only via RLS)
   */
  async updateProject(id, project) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update(project)
        .eq('id', id)
        .select();
        
      if (error) throw error;
      return data[0];
    } catch (error) {
       throw error;
    }
  },

  /**
   * Deletes a project from the cloud database
   */
  async deleteProject(id) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      return true;
    } catch (error) {
        throw error;
    }
  },

  /**
   * Fetches global portfolio settings from the cloud
   */
  async getSettings() {
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('*')
        .eq('id', 1)
        .single();
        
      if (error) throw error;
      return data;
    } catch (error) {
       console.error("SUPABASE_SETTINGS_FETCH_ERROR:", error);
       throw error;
    }
  },

  /**
   * Updates global portfolio settings (Admin Only via RLS)
   */
  async updateSettings(settings) {
    try {
      const { data, error } = await supabase
        .from('settings')
        .update(settings)
        .eq('id', 1)
        .select();
        
      if (error) throw error;
      return data[0];
    } catch (error) {
       throw error;
    }
  }
};
