import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cmsService } from '../../shared/services/cmsService';
import { useConfig } from '../../shared/context/ConfigContext';

const ConfigDashboard = () => {
    const { refreshConfig } = useConfig();
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        name: '',
        role: '',
        browser_title: '',
        hero_tagline: '',
        about_subtitle: '',
        about_bio: '',
        about_quote: '',
        about_quote_author: '',
        about_image_url: '',
        skills: [],
        github_url: '',
        linkedin_url: '',
        system_status: '',
        footer_text: '',
        expertise: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cmsService.getSettings().then(data => {
            setSettings(data);
            setLoading(false);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings(prev => ({ ...prev, [name]: value }));
    };

    const handleSkillsChange = (e) => {
        setSettings(prev => ({ 
            ...prev, 
            skills: e.target.value.split(',').map(s => s.trim()) 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await cmsService.updateSettings(settings);
            await refreshConfig();
            alert("Universal Configuration Updated");
        } catch (error) {
            alert("Update failed");
        }
    };

    if (loading) return <div className="p-24 text-center font-mono text-primary animate-pulse">BOOTING_CONFIG_MODULE...</div>;

    return (
        <div className="min-h-screen bg-background p-8 lg:p-16">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-12 pb-24">
                <div className="flex justify-between items-end border-b border-white/5 pb-8 sticky top-0 bg-background/80 backdrop-blur-xl z-50">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">PORTFOLIO_IDENTITY_ENGINE</h1>
                        <p className="text-[10px] font-mono text-primary tracking-widest uppercase">System: // UNIVERSAL_CONFIG</p>
                    </div>
                    <div className="flex gap-4">
                         <button type="button" onClick={() => navigate('/admin')} className="px-6 py-2 text-xs font-mono text-white/40 hover:text-white transition-colors">BACK_TO_DASHBOARD</button>
                         <button type="submit" className="px-10 py-4 bg-primary text-black font-headline font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(88,245,209,0.3)] transition-all">
                            SYNC_GLOBAL_STATE
                         </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                     {/* Brand Identity */}
                     <div className="space-y-8 glass-panel p-8 bg-white/2 border border-white/5 rounded-3xl">
                        <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] border-b border-white/5 pb-4">Branding_Identity</h3>
                        <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">Owner_Name</label>
                            <input name="name" value={settings.name} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-headline font-bold text-xl" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">Architectural_Role</label>
                            <input name="role" value={settings.role} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-headline font-bold text-xl" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">Browser_Tab_Title</label>
                            <input name="browser_title" value={settings.browser_title} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-xs" />
                        </div>
                     </div>

                     {/* System Parameters */}
                     <div className="space-y-8 glass-panel p-8 bg-white/2 border border-white/5 rounded-3xl">
                        <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] border-b border-white/5 pb-4">System_Global_Parameters</h3>
                        <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">System_Health_Status</label>
                            <input name="system_status" value={settings.system_status} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-xs" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">Footer_Copyright_Notice</label>
                            <input name="footer_text" value={settings.footer_text} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-[10px]" />
                        </div>
                     </div>
                </div>

                {/* Hero / Hooks */}
                <div className="space-y-8 glass-panel p-12 bg-white/2 border border-white/5 rounded-[2rem]">
                    <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] border-b border-white/5 pb-4">Visual_Hook_Ingestion</h3>
                    <div className="space-y-4">
                        <label className="text-[10px] font-mono uppercase text-white/40">Hero_Primary_Tagline</label>
                        <textarea name="hero_tagline" value={settings.hero_tagline} onChange={handleChange} className="w-full h-32 bg-transparent border border-white/5 rounded-2xl p-6 font-light text-lg leading-relaxed italic" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] font-mono uppercase text-white/40">Core_Skill_Cloud (Comma Separated)</label>
                        <input value={settings.skills.join(', ')} onChange={handleSkillsChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-sm text-primary" placeholder="Python, SQL, etc." />
                    </div>
                </div>

                {/* Social Connect Nodes */}
                <div className="space-y-8 glass-panel p-12 bg-white/2 border border-white/5 rounded-[2rem]">
                    <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] border-b border-white/5 pb-4">Social_Connect_Nodes</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">GitHub_Profile_URL</label>
                            <input name="github_url" value={settings.github_url} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-xs" />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">LinkedIn_Profile_URL</label>
                            <input name="linkedin_url" value={settings.linkedin_url} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-xs" />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-mono uppercase text-white/40">Curriculum_Vitae_URL (CV Link)</label>
                            <input name="cv_url" value={settings.cv_url} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-xs text-primary" placeholder="Google Drive / Dropbox Link..." />
                         </div>
                    </div>
                </div>

                {/* About Me / Biography */}
                <div className="space-y-8 glass-panel p-12 bg-white/2 border border-white/5 rounded-[2rem]">
                    <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] border-b border-white/5 pb-4">Biographical_Narrative_Ingestion</h3>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-white/40">About_Subtitle (Headline)</label>
                                <input name="about_subtitle" value={settings.about_subtitle} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-headline font-bold text-lg" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-white/40">Biography_Text</label>
                                <textarea name="about_bio" value={settings.about_bio} onChange={handleChange} className="w-full h-48 bg-transparent border border-white/5 rounded-2xl p-4 font-light text-sm leading-relaxed" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-white/40">Profile_Image_URL</label>
                                <input name="about_image_url" value={settings.about_image_url} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-mono text-xs" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-white/40">Philosophy_Quote</label>
                                <textarea name="about_quote" value={settings.about_quote} onChange={handleChange} className="w-full h-20 bg-transparent border border-white/5 rounded-2xl p-4 font-light italic text-xs" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-white/40">Quote_Author</label>
                                <input name="about_quote_author" value={settings.about_quote_author} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 p-2 font-headline font-bold text-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Expertise Domains */}
                <div className="space-y-8 glass-panel p-12 bg-white/2 border border-white/5 rounded-[2rem]">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                        <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Strategic_Technical_Expertise</h3>
                        <button type="button" onClick={() => setSettings(prev => ({ 
                            ...prev, 
                            expertise: [...prev.expertise, { title: '', description: '', icon: 'database', color: 'from-primary/20' }] 
                        }))} className="text-[10px] font-mono text-primary hover:underline">APPEND_DOMAIN</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {settings.expertise?.map((item, index) => (
                            <div key={index} className="p-6 bg-white/2 border border-white/5 rounded-2xl space-y-4 relative group">
                                <button type="button" onClick={() => setSettings(prev => ({
                                    ...prev,
                                    expertise: prev.expertise.filter((_, i) => i !== index)
                                }))} className="absolute top-4 right-4 text-white/10 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-sm">close</span>
                                </button>
                                <div className="space-y-2">
                                    <label className="text-[8px] font-mono uppercase text-white/20 tracking-widest">Domain_Title</label>
                                    <input value={item.title} onChange={e => {
                                        const newExpertise = [...settings.expertise];
                                        newExpertise[index].title = e.target.value;
                                        setSettings({...settings, expertise: newExpertise});
                                    }} className="w-full bg-transparent border-b border-white/5 p-1 font-bold text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[8px] font-mono uppercase text-white/20 tracking-widest">Description</label>
                                    <textarea value={item.description} onChange={e => {
                                        const newExpertise = [...settings.expertise];
                                        newExpertise[index].description = e.target.value;
                                        setSettings({...settings, expertise: newExpertise});
                                    }} className="w-full bg-transparent border border-white/5 p-2 text-[11px] font-light leading-relaxed" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                     <div className="space-y-2">
                                        <label className="text-[8px] font-mono uppercase text-white/20 tracking-widest">Icon_ID</label>
                                        <input value={item.icon} onChange={e => {
                                            const newExpertise = [...settings.expertise];
                                            newExpertise[index].icon = e.target.value;
                                            setSettings({...settings, expertise: newExpertise});
                                        }} className="w-full bg-transparent border-b border-white/5 p-1 text-[10px] font-mono" />
                                     </div>
                                     <div className="space-y-2">
                                        <label className="text-[8px] font-mono uppercase text-white/20 tracking-widest">Gradient_Class</label>
                                        <input value={item.color} onChange={e => {
                                            const newExpertise = [...settings.expertise];
                                            newExpertise[index].color = e.target.value;
                                            setSettings({...settings, expertise: newExpertise});
                                        }} className="w-full bg-transparent border-b border-white/5 p-1 text-[10px] font-mono" />
                                     </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ConfigDashboard;
