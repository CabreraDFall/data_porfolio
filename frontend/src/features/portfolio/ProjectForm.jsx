import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cmsService } from '../../shared/services/cmsService';
import { useToast } from '../../shared/contexts/ToastContext';
import { slugify } from '../../shared/utils/slugify';

// Modular Components
import MetadataSection from './components/form/MetadataSection';
import MetricSection from './components/form/MetricSection';
import NarrativeSection from './components/form/NarrativeSection';
import HardshipSection from './components/form/HardshipSection';
import LogicSection from './components/form/LogicSection';

const ProjectForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();
    
    const [project, setProject] = useState({
        id: '',
        index: '',
        role: '',
        duration: '',
        domain: '',
        title: '',
        description: '',
        github_url: '',
        github_highlight_url: '',
        code_teaser: '',
        mermaid_code: '',
        tags: [],
        kpis: [],
        challenges: [],
        detailed_analysis: { problem: '', solution: '', impact: '' }
    });

    useEffect(() => {
        if (id) {
            setLoading(true);
            cmsService.getProjectById(id).then(data => {
                if (data) setProject(data);
                setLoading(false);
            });
        }
    }, [id]);

    // Auto-generate slug from title
    useEffect(() => {
        // Only auto-generate if we are creating a new project
        // or if the current id is already a slugified version of the title (meaning it's in sync)
        const currentSlug = slugify(project.title);
        if (!id && project.title) {
            setProject(prev => ({ ...prev, id: currentSlug }));
        }
    }, [project.title, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const handleAnalysisChange = (e) => {
        const { name, value } = e.target;
        setProject(prev => ({
            ...prev,
            detailed_analysis: { ...prev.detailed_analysis, [name]: value }
        }));
    };

    const addListItem = (field, defaultValue) => {
        setProject(prev => ({ ...prev, [field]: [...prev[field], defaultValue] }));
    };

    const removeListItem = (field, index) => {
        setProject(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await cmsService.updateProject(id, project);
                showToast("Architecture updated successfully", "success");
            } else {
                await cmsService.createProject(project);
                showToast("New system deployed successfully", "success");
            }
            navigate('/admin');
        } catch (error) {
            showToast("Sync Error: " + (error.message || "Check Backend Logs"), "error");
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-background flex items-center justify-center p-24 text-center font-mono text-primary animate-pulse">
            SYNCING_METADATA_STREAM...
        </div>
    );

    return (
        <div className="min-h-screen bg-background text-on-background p-8 lg:p-16">
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-24 pb-24">
                
                {/* Header Controls */}
                <div className="flex justify-between items-end border-b border-white/5 pb-8 sticky top-0 bg-background/80 backdrop-blur-xl z-50">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter italic">
                            {id ? 'MODIFY_ARCHITECTURE' : 'DEPLOY_NEW_SYSTEM'}
                        </h1>
                        <p className="text-[10px] font-mono text-primary tracking-widest uppercase">
                            Target_Entity: // <span className="text-white">{project.id || 'NEW_ENTRY'}</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                         <button 
                            type="button" 
                            onClick={() => navigate('/admin')} 
                            className="px-6 py-2 text-xs font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest"
                         >
                            CANCEL
                         </button>
                         <button 
                            type="submit" 
                            className="px-10 py-4 bg-primary text-black font-headline font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(88,245,209,0.3)] transition-all active:scale-95"
                         >
                            COMMIT_TO_SQL
                         </button>
                    </div>
                </div>

                {/* Sections */}
                <MetadataSection project={project} handleChange={handleChange} />
                
                <MetricSection 
                    project={project} 
                    setProject={setProject} 
                    addListItem={addListItem} 
                    removeListItem={removeListItem} 
                />

                <NarrativeSection 
                    project={project} 
                    handleAnalysisChange={handleAnalysisChange} 
                />

                <HardshipSection 
                    project={project} 
                    setProject={setProject} 
                    addListItem={addListItem} 
                    removeListItem={removeListItem} 
                />

                <LogicSection 
                    project={project} 
                    handleChange={handleChange} 
                    setProject={setProject} 
                />

            </form>
        </div>
    );
};

export default ProjectForm;
