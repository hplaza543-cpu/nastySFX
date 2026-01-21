import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Lock, Mail, User, ShieldCheck, Eye, EyeOff } from 'lucide-react';

interface AuthScreenProps {
  onLogin: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API delay/auth process
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Ambience similar to Hero */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 rounded-[100%] blur-[120px] opacity-40 mix-blend-screen animate-pulse" />
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl relative z-10 slide-in-right">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-black rounded-xl font-bold text-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            N
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {isLogin ? 'Welcome back' : 'Join the elite'}
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            {isLogin ? 'Enter your credentials to access your workflow.' : 'Create an account to start downloading assets.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="text" 
                  required 
                  className="w-full bg-gray-950/80 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm shadow-inner"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="email" 
                required 
                className="w-full bg-gray-950/80 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm shadow-inner"
                placeholder="editor@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Password</label>
                {isLogin && <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot?</a>}
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                className="w-full bg-gray-950/80 border border-white/10 rounded-xl py-3.5 pl-10 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm shadow-inner"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-white transition-colors focus:outline-none focus:text-indigo-400"
                title={showPassword ? "Hide password" : "Show password"}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <Button 
                variant="primary" 
                className="w-full justify-center group h-12 text-base" 
                disabled={isLoading}
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Authenticating...
                    </span>
                ) : (
                    <>
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-white/5">
          <p className="text-sm text-gray-500 mb-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-sm font-medium text-white hover:text-indigo-400 transition-colors border border-white/10 hover:border-indigo-500/50 px-6 py-2 rounded-lg bg-gray-800/50"
          >
            {isLogin ? "Create Account" : "Sign In to Account"}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-center">
         <div className="flex items-center gap-2 text-xs text-gray-600">
            <ShieldCheck className="w-3 h-3" />
            <span>Secure 256-bit Encryption</span>
         </div>
         <p className="text-[10px] text-gray-700">
            &copy; {new Date().getFullYear()} nastySFX. All rights reserved.
         </p>
      </div>
    </div>
  );
};

export default AuthScreen;