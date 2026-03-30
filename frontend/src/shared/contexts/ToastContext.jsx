import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'info') => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts(prev => [...prev, { id, message, type }]);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, 5000);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 pointer-events-none">
                {toasts.map(toast => (
                    <ToastItem 
                        key={toast.id} 
                        toast={toast} 
                        onClose={() => removeToast(toast.id)} 
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onClose }) => {
    const getTypeStyles = () => {
        switch (toast.type) {
            case 'success': return 'border-primary/40 bg-primary/10 text-primary';
            case 'error': return 'border-red-500/40 bg-red-500/10 text-red-400';
            case 'warning': return 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400';
            default: return 'border-white/20 bg-white/5 text-white/80';
        }
    };

    const getIcon = () => {
        switch (toast.type) {
            case 'success': return 'check_circle';
            case 'error': return 'error';
            case 'warning': return 'warning';
            default: return 'info';
        }
    };

    return (
        <div className={`pointer-events-auto min-w-[320px] p-6 glass-panel border ${getTypeStyles()} rounded-2xl flex items-center justify-between gap-4 animate-in slide-in-from-right-full duration-500 shadow-2xl backdrop-blur-2xl`}>
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xl opacity-80">{getIcon()}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                    {toast.message}
                </span>
            </div>
            <button 
                onClick={onClose}
                className="text-white/20 hover:text-white transition-colors focus:outline-none"
            >
                <span className="material-symbols-outlined text-sm">close</span>
            </button>
        </div>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
