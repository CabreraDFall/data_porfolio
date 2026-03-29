import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { cmsService } from '../../../shared/services/cmsService';
import { ProjectCardSkeleton } from '../../../shared/components/Skeleton';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await cmsService.getAllProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load project metadata from CMS.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return (
      <div className="py-24 px-6 text-center">
        <span className="material-symbols-outlined text-4xl text-primary opacity-20 mb-4 italic font-light">error</span>
        <p className="text-on-surface-variant font-mono text-sm uppercase tracking-widest">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 lg:px-20 bg-surface" id="projects">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-baseline mb-16 border-b border-outline-variant/10 pb-6">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight uppercase">
            DEPLOYED_ARCHITECTURES
          </h2>
          <div className="text-[10px] font-mono text-primary uppercase tracking-widest hidden md:block">
            [TOTAL_PROJECTS: {loading ? '--' : projects.length.toString().padStart(2, '0')}]
          </div>
        </div>
        
        {/* Grid Layout strictly matching the image provided (2x2) */}
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10 rounded-2xl overflow-hidden shadow-2xl">
          {loading ? (
            // Premium Skeleton Grid
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-surface p-1">
                <ProjectCardSkeleton />
              </div>
            ))
          ) : (
            // Dynamic Project Card Grid
            projects.map((project) => (
              <div key={project.id} className="bg-surface p-1">
                <ProjectCard 
                  {...project} 
                  onViewDeepDive={() => navigate(`/project/${project.id}`)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
