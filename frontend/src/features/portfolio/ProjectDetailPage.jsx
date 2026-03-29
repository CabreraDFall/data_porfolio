import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Mermaid from '../../shared/components/Mermaid';
import { cmsService } from '../../shared/services/cmsService';
import { ProjectDetailSkeleton } from '../../shared/components/Skeleton';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true);
        const data = await cmsService.getAllProjects();
        const foundProject = data.find(p => p.id === id);
        
        if (!foundProject) {
          setError("Project Not Found");
          return;
        }

        const currentIndex = data.findIndex(p => p.id === id);
        const next = data[(currentIndex + 1) % data.length];
        
        setProject(foundProject);
        setNextProject(next);
      } catch (err) {
        setError("Failed to fetch project data from CMS.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <ProjectDetailSkeleton />;

  if (error || !project) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-on-surface">
        <h2 className="text-4xl font-headline font-bold mb-4">{error || "Project Not Found"}</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all"
        >
          Return to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30">
      {/* Premium Header */}
      <nav className="flex items-center justify-between p-6 max-w-[1440px] mx-auto border-b border-white/5 bg-background/50 backdrop-blur-xl sticky top-0 z-50">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-[10px] font-mono text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Hub <span className="text-white/20">/</span> Case Study <span className="text-white/20">/</span> <span className="text-primary">{project.domain}</span>
        </button>
        <div className="hidden md:flex gap-6 items-center">
            <div className="flex flex-col items-end">
                <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest">Ownership Role</span>
                <span className="text-xs font-headline font-bold text-on-surface">{project.role}</span>
            </div>
            <div className="w-px h-8 bg-white/5"></div>
            <div className="flex gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container-highest/50 border border-primary/20 text-[10px] font-mono text-primary">
                   {tag}
                </span>
              ))}
            </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto p-6 lg:p-12 space-y-12 lg:space-y-24">
        {/* Project Header & KPI Box */}
        <div className="space-y-12">
          <div className="space-y-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="space-y-6">
                <h1 className="text-6xl lg:text-9xl font-headline font-bold tracking-tighter text-on-surface leading-[0.85] drop-shadow-[0_0_40px_rgba(88,245,209,0.2)]">
                {project.title}
                </h1>
                <p className="text-xl lg:text-2xl font-light text-on-surface-variant leading-relaxed max-w-3xl border-l-2 border-primary/30 pl-8">
                    {project.description}
                </p>
            </div>
            {/* KPI Performance Box */}
            <div className="glass-panel p-8 rounded-3xl border border-primary/20 bg-primary/5 min-w-[320px] space-y-6 shadow-[0_0_50px_rgba(88,245,209,0.05)]">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary border-b border-primary/10 pb-4">Verified Project Impact</h4>
                <div className="grid grid-cols-1 gap-6">
                    {project.kpis.map((kpi, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl opacity-60">{kpi.icon}</span>
                                <span className="text-xs text-on-surface-variant font-mono uppercase tracking-wider">{kpi.label}</span>
                            </div>
                            <span className="text-2xl font-headline font-bold text-white">{kpi.value}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          
          {/* Main Visualization Container */}
          <div className="w-full glass-panel rounded-[2rem] border border-white/10 overflow-hidden relative">
             <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#58f5d1_1px,transparent_1px)] [background-size:32px_32px]"></div>
             <div className="relative w-full min-h-[500px] flex items-center justify-center p-8 lg:p-16">
                <Mermaid chart={project.mermaidCode} />
                <div className="absolute top-0 right-0 p-6 flex flex-col items-end gap-2">
                    <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[.4em]">ARCHITECTURE_LOGIC.FLOW</span>
                    <span className="text-[10px] font-mono text-white/20">PROJECT_REF: // {id}</span>
                </div>
             </div>
          </div>
        </div>

        {/* Structured In-Depth Analysis */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-8 space-y-16">
                {/* The Narrative */}
                <section className="space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">Section 01 / The Challenge</h3>
                        <p className="text-2xl leading-relaxed font-light text-on-surface-variant first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-1">
                            {project.detailedAnalysis.problem}
                        </p>
                    </div>
                </section>

                <section className="space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">Section 02 / Advanced implementation</h3>
                        <p className="text-2xl leading-relaxed font-light text-on-surface-variant">
                            {project.detailedAnalysis.solution}
                        </p>
                        {/* Logic Spotlight */}
                        <div className="pt-8">
                            <div className="rounded-3xl border border-white/10 bg-[#0d121b] overflow-hidden shadow-2xl relative group">
                                <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                                    <div className="flex gap-1.5 items-center">
                                        <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                        <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest pl-4">logic_snippet.ext</span>
                                    </div>
                                    <a href={project.githubHighlightUrl} target="_blank" className="flex items-center gap-2 text-[8px] font-mono uppercase text-primary hover:text-white transition-colors">
                                        Source_Code <span className="material-symbols-outlined text-xs">north_east</span>
                                    </a>
                                </div>
                                <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto text-on-surface/80">
                                    <pre><code>{project.codeTeaser}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-12">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">Section 03 / Strategic Impact</h3>
                            <p className="text-2xl leading-relaxed font-light text-on-surface-variant italic border-l-4 border-primary/40 pl-12 bg-primary/5 py-8 rounded-r-3xl">
                                "{project.detailedAnalysis.impact}"
                            </p>
                        </div>
                        {/* Final GitHub Engagement Button */}
                        <div className="pt-8">
                            <a 
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-br from-primary to-primary-container text-black font-headline font-bold uppercase tracking-widest rounded-2xl hover:shadow-[0_0_50px_rgba(88,245,209,0.3)] transition-all active:scale-95 group"
                            >
                                <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">terminal</span>
                                Explore Full Build on GitHub
                                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Structured Sidebar for Recruiter Scannability */}
            <aside className="lg:col-span-4 space-y-12">
                <div className="sticky top-32 space-y-12">
                    {/* Role & Period */}
                    <div className="p-8 glass-panel rounded-3xl border border-white/5 bg-surface-container-lowest/20 space-y-6">
                        <div className="space-y-2">
                             <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Candidate Role</div>
                             <div className="text-xl font-headline font-bold text-on-surface">{project.role}</div>
                        </div>
                        <div className="w-full h-px bg-white/5"></div>
                        <div className="space-y-2">
                             <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Project Period</div>
                             <div className="text-xl font-headline font-bold text-on-surface">{project.duration}</div>
                        </div>
                    </div>

                    {/* Summary of Technical Challenges */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Technical Hardships</h4>
                        <div className="space-y-4">
                            {project.challenges.map((item, i) => (
                                <div key={i} className="p-6 glass-panel rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                                    <div className="flex gap-4 items-start">
                                        <span className="material-symbols-outlined text-primary opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                                        <div className="space-y-1">
                                            <div className="text-[10px] font-mono text-on-surface-variant uppercase">{item.challenge}</div>
                                            <div className="text-xs font-light text-on-surface/80">{item.solution}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </div>

        {/* Up Next & Connect Social */}
        <section className="pt-24 border-t border-white/10 space-y-24">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                     <h2 className="text-5xl lg:text-7xl font-headline font-bold tracking-tighter text-on-surface">Let's Connect</h2>
                     <p className="text-xl font-light text-on-surface-variant leading-relaxed max-w-md">
                        Impelled by data integrity and high-throughput architecture. Reach out for technical collaboration or opportunities.
                     </p>
                     <div className="flex gap-4">
                        <a href="#" className="w-16 h-16 rounded-full glass-panel border border-white/10 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/40 transition-all group">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">hub</span>
                        </a>
                        <a href="#" className="w-16 h-16 rounded-full glass-panel border border-white/10 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/40 transition-all group">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">share</span>
                        </a>
                     </div>
                </div>
                {/* Next Project Invitation */}
                {nextProject && (
                  <div onClick={() => navigate(`/project/${nextProject.id}`)} className="group cursor-pointer p-12 glass-panel rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-surface-container-highest/20 to-transparent hover:border-primary/30 transition-all relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[radial-gradient(circle_at_center,_#58f5d1_0%,_transparent_70%)]"></div>
                      <div>
                          <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-4">Up Next / Deep Dive</div>
                          <h3 className="text-4xl lg:text-6xl font-headline font-bold tracking-tighter text-on-surface leading-tight group-hover:translate-x-2 transition-transform duration-500">
                              {nextProject.title}
                          </h3>
                      </div>
                      <div className="flex items-center gap-4 text-primary font-mono text-[10px] uppercase tracking-widest mt-8">
                          View Project Analysis <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
                      </div>
                  </div>
                )}
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
