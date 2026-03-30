import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cmsService } from '../../shared/services/cmsService';
import { useAuth } from '../auth/AuthContext';
import { useToast } from '../../shared/contexts/ToastContext';

// Modular Components
import AdminHeader from './components/admin/AdminHeader';
import ProjectTable from './components/admin/ProjectTable';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const { showToast } = useToast();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const data = await cmsService.getAllProjects();
            setProjects(data);
        } catch (error) {
            showToast("System Link Failure: " + (error.message || "Unknown error"), "error");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut();
        showToast("Session terminated", "info");
        navigate('/');
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to decommission this architecture? This action is irreversible.")) {
            try {
                await cmsService.deleteProject(id);
                showToast("Architecture decommissioned successfully", "success");
                fetchProjects();
            } catch (error) {
                showToast("Operation failed: " + (error.message || "Unknown error"), "error");
            }
        }
    };

    return (
        <div className="min-h-screen bg-background text-on-background p-8 lg:p-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <AdminHeader 
                    onNewArchitecture={() => navigate('/admin/new')}
                    onConfig={() => navigate('/admin/config')}
                    onLogout={handleLogout}
                />

                <ProjectTable 
                    projects={projects}
                    loading={loading}
                    onEdit={(id) => navigate(`/admin/edit/${id}`)}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
