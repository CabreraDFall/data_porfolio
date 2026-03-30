import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/admin';

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: loginError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (loginError) throw loginError;

            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="space-y-8">
                    <div className="text-center space-y-2">
                        <div className="w-16 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
                        <h1 className="text-4xl font-headline font-bold tracking-tighter uppercase italic">
                            ACCESS_REQUISITION
                        </h1>
                        <p className="text-on-surface-variant font-mono text-[10px] uppercase tracking-[0.4em] text-primary">
                            System: // ENCRYPTED_HANDSHAKE
                        </p>
                    </div>

                    <div className="glass-panel p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-xl">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">
                                    Identity_Token (Email)
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary/50 transition-all text-primary"
                                    required
                                    placeholder="admin@system.local"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">
                                    Access_Key (Password)
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary/50 transition-all text-primary"
                                    required
                                    placeholder="••••••••"
                                />
                            </div>

                            {error && (
                                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-red-400 text-[10px] font-mono uppercase tracking-wider animate-shake">
                                    Error: {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-black font-headline font-bold uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_40px_rgba(88,245,209,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                                        PROCESSING_KEY...
                                    </span>
                                ) : (
                                    <>
                                        ESTABLISH_CONNECTION
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">login</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => navigate('/')}
                            className="text-white/30 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            ABORT_ACCESS_REQUEST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
