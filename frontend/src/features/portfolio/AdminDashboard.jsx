import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cmsService } from '../../shared/services/cmsService';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const data = await cmsService.getAllProjects();
            setProjects(data);
        } catch (error) {
            console.error("Fetch failed", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to decommission this architecture?")) {
            try {
                // To be implemented in cmsService
                await cmsService.deleteProject(id);
                fetchProjects();
            } catch (error) {
                alert("Deletion failed");
            }
        }
    };

    return (
        <div className="min-h-screen bg-background text-on-background p-8 lg:p-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="flex justify-between items-end border-b border-white/5 pb-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-headline font-bold tracking-tighter">CMS_CONTROL_CENTER</h1>
                        <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest text-primary">System: // ACTIVE_MANAGEMENT</p>
                    </div>
                    <button 
                        onClick={() => navigate('/admin/new')}
                        className="px-6 py-3 bg-primary text-black font-headline font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(88,245,209,0.3)] transition-all flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">add</span>
                        New Architecture
                    </button>
                </div>

                <div className="glass-panel overflow-hidden border border-white/10 rounded-2xl bg-surface-container-lowest/10">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">
                                <th className="p-6">Index</th>
                                <th className="p-6">Architecture Title</th>
                                <th className="p-6">Domain</th>
                                <th className="p-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 font-mono text-xs">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-white/2 transition-colors group">
                                    <td className="p-6 text-primary">#{project.index}</td>
                                    <td className="p-6 font-bold text-on-surface">{project.title}</td>
                                    <td className="p-6 text-on-surface-variant">{project.domain}</td>
                                    <td className="p-6 text-right space-x-4">
                                        <button 
                                            onClick={() => navigate(`/admin/edit/${project.id}`)}
                                            className="text-on-surface-variant hover:text-white transition-colors"
                                        >
                                            EDIT
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(project.id)}
                                            className="text-primary/40 hover:text-primary transition-colors"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {loading && (
                        <div className="p-24 text-center text-on-surface-variant italic font-light animate-pulse">
                            Syncing with SQLite Engine...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
