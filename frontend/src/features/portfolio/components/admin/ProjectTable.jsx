import React from 'react';

const ProjectTable = ({ projects, loading, onEdit, onDelete }) => {
    return (
        <div className="glass-panel overflow-hidden border border-white/5 rounded-3xl bg-surface-container-lowest/10 relative">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-white/2 text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] border-b border-white/5">
                        <th className="p-8">Index</th>
                        <th className="p-8">Architecture Title</th>
                        <th className="p-8">Domain</th>
                        <th className="p-8 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-[10px]">
                    {projects.map((project) => (
                        <tr key={project.id} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="p-8 text-primary font-bold">#{project.index}</td>
                            <td className="p-8">
                                <span className="text-sm font-headline font-bold text-on-surface group-hover:text-white transition-colors uppercase italic">
                                    {project.title}
                                </span>
                            </td>
                            <td className="p-8">
                                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-white/40">
                                    {project.domain}
                                </span>
                            </td>
                            <td className="p-8 text-right space-x-6">
                                <button 
                                    onClick={() => onEdit(project.id)}
                                    className="text-on-surface-variant hover:text-white transition-all uppercase tracking-widest hover:scale-105 active:scale-95"
                                >
                                    EDIT_ENTITY
                                </button>
                                <button 
                                    onClick={() => onDelete(project.id)}
                                    className="text-primary/30 hover:text-primary transition-all uppercase tracking-widest hover:scale-105 active:scale-95"
                                >
                                    DECOMMISSION
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {loading && (
                <div className="p-32 text-center text-primary italic font-mono text-xs animate-pulse bg-background/50 backdrop-blur-sm">
                    SYNCING_WITH_SUPABASE_CLUSTER...
                </div>
            )}
            
            {!loading && projects.length === 0 && (
                <div className="p-32 text-center text-white/20 font-mono text-xs italic">
                    NO_ENTITIES_DETECTED // DATALAKE_EMPTY
                </div>
            )}
        </div>
    );
};

export default ProjectTable;
