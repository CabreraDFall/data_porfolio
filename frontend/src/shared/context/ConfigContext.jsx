import React, { createContext, useContext, useState, useEffect } from 'react';
import { cmsService } from '../services/cmsService';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    name: 'Abraham Cabrera',
    role: 'Data Engineer',
    browser_title: 'Abraham Cabrera | Data Engineer Portfolio',
    hero_tagline: 'Engineering high-throughput, fault-tolerant ecosystems that transform raw complexity into strategic intelligence.',
    about_subtitle: 'Código con propósito',
    about_bio: '',
    about_quote: '',
    about_quote_author: '',
    about_image_url: '',
    skills: ['Python', 'SQL', 'Spark', 'Airflow', 'Snowflake', 'DWH', 'Streaming'],
    expertise: [],
    github_url: 'https://github.com/AbrahamCabrera',
    linkedin_url: '#',
    cv_url: '#',
    system_status: 'Optimal',
    footer_text: '© 2026 Abraham Cabrera. Engineered for Precision.'
  });
  const [loading, setLoading] = useState(true);

  const refreshConfig = async () => {
    try {
      const data = await cmsService.getSettings();
      if (data) {
        setConfig(data);
        // Update browser title dynamically
        document.title = data.browser_title;
      }
    } catch (error) {
      console.error("CONFIG_SYNC_ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ config, loading, refreshConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
