import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cmsService } from '../../shared/services/cmsService';

const ProjectForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    // Detailed Initial State (Aligned with Supabase snake_case)
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

    // Dynamic List Handlers
    const addListItem = (field, defaultValue) => {
        setProject(prev => ({ ...prev, [field]: [...prev[field], defaultValue] }));
    };

    const removeListItem = (field, index) => {
        setProject(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));
    };

    const updateListItem = (field, index, value) => {
        setProject(prev => {
            const newList = [...prev[field]];
            newList[index] = value;
            return { ...prev, [field]: newList };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await cmsService.updateProject(id, project);
            } else {
                await cmsService.createProject(project);
            }
            navigate('/admin');
        } catch (error) {
            alert("Sync Error: Check Backend Logs");
        }
    };

    if (loading) return <div className="p-24 text-center font-mono text-primary animate-pulse">SYNCING_METADATA...</div>;

    return (
        <div className="min-h-screen bg-background text-on-background p-8 lg:p-16">
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-16 pb-24">
                
                {/* Header Controls */}
                <div className="flex justify-between items-end border-b border-white/5 pb-8 sticky top-0 bg-background/80 backdrop-blur-xl z-50">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">
                            {id ? 'MODIFY_ARCHITECTURE' : 'DEPLOY_NEW_SYSTEM'}
                        </h1>
                        <p className="text-[10px] font-mono text-primary tracking-widest uppercase">Target_Entity: // {project.id || 'NEW_ENTRY'}</p>
                    </div>
                    <div className="flex gap-4">
                         <button type="button" onClick={() => navigate('/admin')} className="px-6 py-2 text-xs font-mono text-white/40 hover:text-white transition-colors">DECOMMISSION_EDIT</button>
                         <button type="submit" className="px-10 py-4 bg-primary text-black font-headline font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(88,245,209,0.3)] transition-all active:scale-95">
                            COMMIT_TO_SQL
                         </button>
                    </div>
                </div>

                {/* Section 1: Core Metadata */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-white/40">system_id (slug)</label>
                                <input name="id" value={project.id} onChange={handleChange} className="w-full glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl font-mono text-xs focus:border-primary/50 outline-none transition-all" placeholder="ecommerce-dwh" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-white/40">visual_index</label>
                                <input name="index" value={project.index} onChange={handleChange} className="w-full glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl font-mono text-xs focus:border-primary/50 outline-none transition-all" placeholder="01" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase text-white/40">architecture_title</label>
                            <input name="title" value={project.title} onChange={handleChange} className="w-full glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl font-headline font-bold text-lg focus:border-primary/50 outline-none transition-all" placeholder="Project Name" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase text-white/40">short_manifesto (description)</label>
                            <textarea name="description" value={project.description} onChange={handleChange} className="w-full h-32 glass-panel-input p-4 bg-white/2 border border-white/5 rounded-xl text-sm font-light leading-relaxed focus:border-primary/50 outline-none transition-all" placeholder="Brief system overview..." />
                        </div>
                    </div>
                    
                    <div className="space-y-8 glass-panel p-8 bg-white/2 border border-white/5 rounded-3xl h-fit">
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase text-white/40">Technical_Role</label>
                            <input name="role" value={project.role} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-white/10 text-xs font-bold" placeholder="Lead Architect" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase text-white/40">System_Domain</label>
                            <input name="domain" value={project.domain} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-white/10 text-xs font-bold" placeholder="CLOUD_INGESTION" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase text-white/40">Project_Duration</label>
                            <input name="duration" value={project.duration} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-white/10 text-xs font-bold" placeholder="6 Months" />
                        </div>
                    </div>
                </div>

                {/* Section 2: Verified Impact (KPIs) */}
                <div className="space-y-8">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                        <h3 className="text-xl font-headline font-bold uppercase tracking-tighter">Verified_Metrics</h3>
                        <button type="button" onClick={() => addListItem('kpis', { label: '', value: '', icon: 'speed' })} className="text-[10px] font-mono text-primary hover:underline">APPEND_KPI</button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {project.kpis.map((kpi, index) => (
                            <div key={index} className="glass-panel p-6 bg-white/2 border border-white/5 rounded-2xl space-y-4 relative group">
                                <button type="button" onClick={() => removeListItem('kpis', index)} className="absolute top-4 right-4 text-white/20 hover:text-primary transition-colors">
                                     <span className="material-symbols-outlined text-sm">close</span>
                                </button>
                                <input value={kpi.label} onChange={e => {
                                    const newKpis = [...project.kpis];
                                    newKpis[index].label = e.target.value;
                                    setProject({...project, kpis: newKpis});
                                }} className="w-full bg-transparent text-[10px] font-mono uppercase text-white/40 border-b border-white/5" placeholder="Label (e.g. Latency)" />
                                <input value={kpi.value} onChange={e => {
                                    const newKpis = [...project.kpis];
                                    newKpis[index].value = e.target.value;
                                    setProject({...project, kpis: newKpis});
                                }} className="w-full bg-transparent text-xl font-bold text-white focus:text-primary" placeholder="Value (e.g. -95%)" />
                                <input value={kpi.icon} onChange={e => {
                                    const newKpis = [...project.kpis];
                                    newKpis[index].icon = e.target.value;
                                    setProject({...project, kpis: newKpis});
                                }} className="w-full bg-transparent text-[10px] font-mono text-primary/40" placeholder="Material Icon Name" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Technical Visualization (Mermaid) */}
                <div className="space-y-8">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                         <h3 className="text-xl font-headline font-bold uppercase tracking-tighter">Architecture_Logic</h3>
                         <span className="text-[10px] font-mono text-white/20">LANG: // MERMAID.JS</span>
                    </div>
                    <textarea 
                        name="mermaid_code"
                        value={project.mermaid_code} 
                        onChange={handleChange}
                        className="w-full h-80 glass-panel-input p-8 bg-[#0d121b] border border-white/5 rounded-3xl font-mono text-xs leading-relaxed text-primary/80 focus:border-primary/30 outline-none shadow-2xl"
                        placeholder="graph TD
  A[Input] --> B{Logic}
  B -->|Pass| C[Result]"
                    />
                </div>

                {/* Section 4: Deep Analysis Narratives */}
                <div className="space-y-8">
                    <h3 className="text-xl font-headline font-bold uppercase tracking-tighter border-b border-white/5 pb-4">Technical_Narrative</h3>
                    <div className="grid gap-12">
                         <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-primary tracking-widest">Problem_Statement</label>
                            <textarea name="problem" value={project.detailed_analysis.problem} onChange={handleAnalysisChange} className="w-full h-32 glass-panel-input p-6 bg-white/2 border border-white/5 rounded-2xl text-base font-light italic leading-relaxed" placeholder="The legacy bottleneck..." />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-primary tracking-widest">Architectural_Solution</label>
                            <textarea name="solution" value={project.detailed_analysis.solution} onChange={handleAnalysisChange} className="w-full h-32 glass-panel-input p-6 bg-white/2 border border-white/5 rounded-2xl text-base font-light italic leading-relaxed" placeholder="We designed a layer..." />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-primary tracking-widest">Strategic_Impact</label>
                            <textarea name="impact" value={project.detailed_analysis.impact} onChange={handleAnalysisChange} className="w-full h-32 glass-panel-input p-6 bg-white/2 border border-white/5 rounded-2xl text-base font-light italic leading-relaxed" placeholder="Final business outcome..." />
                         </div>
                    </div>
                </div>

                {/* Section 5: Technical Hardships (Challenges) */}
                <div className="space-y-8">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                        <h3 className="text-xl font-headline font-bold uppercase tracking-tighter">Technical_Hardships</h3>
                        <button type="button" onClick={() => addListItem('challenges', { challenge: '', solution: '', icon: 'hub' })} className="text-[10px] font-mono text-primary hover:underline">APPEND_HARDSHIP</button>
                    </div>
                    <div className="space-y-4">
                        {project.challenges.map((item, index) => (
                            <div key={index} className="grid md:grid-cols-12 gap-6 p-8 glass-panel border border-white/5 rounded-2xl items-center relative group">
                                <button type="button" onClick={() => removeListItem('challenges', index)} className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-sm text-primary">close</span>
                                </button>
                                <div className="md:col-span-1 flex justify-center">
                                     <input value={item.icon} onChange={e => {
                                         const newChallenges = [...project.challenges];
                                         newChallenges[index].icon = e.target.value;
                                         setProject({...project, challenges: newChallenges});
                                     }} className="w-full bg-transparent text-center font-mono text-[10px] text-primary" />
                                </div>
                                <div className="md:col-span-4">
                                     <input value={item.challenge} onChange={e => {
                                         const newChallenges = [...project.challenges];
                                         newChallenges[index].challenge = e.target.value;
                                         setProject({...project, challenges: newChallenges});
                                     }} className="w-full bg-transparent text-xs font-mono uppercase text-white tracking-widest" placeholder="Challenge" />
                                </div>
                                <div className="md:col-span-7">
                                     <input value={item.solution} onChange={e => {
                                         const newChallenges = [...project.challenges];
                                         newChallenges[index].solution = e.target.value;
                                         setProject({...project, challenges: newChallenges});
                                     }} className="w-full bg-transparent text-xs font-light text-on-surface-variant" placeholder="Solution implemented" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 6: Source & Code Highlighting */}
                <div className="space-y-12 pt-12 border-t border-white/5">
                    <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase text-white/40">repository_root_url</label>
                            <input name="github_url" value={project.github_url} onChange={handleChange} className="w-full p-4 glass-panel border border-white/10 rounded-xl font-mono text-[10px]" placeholder="https://github.com/..." />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase text-white/40">code_highlight_path</label>
                            <input name="github_highlight_url" value={project.github_highlight_url} onChange={handleChange} className="w-full p-4 glass-panel border border-white/10 rounded-xl font-mono text-[10px]" placeholder="...#L100" />
                         </div>
                    </div>
                    <div className="space-y-4">
                         <label className="text-[10px] font-mono uppercase text-primary tracking-widest">Logic_Snippet (JSON/Python/SQL)</label>
                         <textarea name="code_teaser" value={project.code_teaser} onChange={handleChange} className="w-full h-48 glass-panel-input p-8 bg-[#0d121b] border border-white/5 rounded-3xl font-mono text-xs text-secondary/80 focus:border-primary/30 outline-none" placeholder="Paste snippets here..." />
                    </div>
                </div>

                {/* Section 7: Tags */}
                <div className="space-y-4">
                    <label className="text-[10px] font-mono uppercase text-white/40">system_stack_tags (Comma Separated)</label>
                    <input 
                        value={project.tags.join(', ')} 
                        onChange={e => setProject({...project, tags: e.target.value.split(',').map(t => t.trim())})} 
                        className="w-full p-4 glass-panel border border-white/10 rounded-xl font-mono text-xs text-primary" 
                        placeholder="Snowflake, dbt, Spark..." 
                    />
                </div>

            </form>
        </div>
    );
};

export default ProjectForm;
