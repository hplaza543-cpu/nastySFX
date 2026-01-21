import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Lock, Mail, User, ShieldCheck, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

interface AuthScreenProps {
  onLogin: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Form Data State
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Mock Database for the session (Simulates backend)
  const [registeredUsers, setRegisteredUsers] = useState<{username: string, password: string}[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setError('');

    // Simulate API delay/auth process
    setTimeout(() => {
      setIsLoading(false);
      
      if (isLogin) {
        // --- LOGIN LOGIC ---
        // 1. Check if user exists
        const user = registeredUsers.find(u => u.username.toLowerCase() === formData.username.toLowerCase());
        
        if (!user) {
            setError('Username not found. Please create an account first.');
            return;
        }

        // 2. Check password
        if (user.password !== formData.password) {
            setError('Incorrect password. Please try again.');
            return;
        }

        // 3. Success
        onLogin();

      } else {
        // --- SIGN UP LOGIC ---
        // 1. Check if username is taken
        const existingUser = registeredUsers.find(u => u.username.toLowerCase() === formData.username.toLowerCase());
        
        if (existingUser) {
            setError('This username is already taken.');
            return;
        }

        // 2. Create new user in "Database"
        const newUser = {
            username: formData.username,
            password: formData.password
        };
        setRegisteredUsers(prev => [...prev, newUser]);
        
        // 3. Switch to login and show success
        setIsLogin(true);
        setSuccessMessage('Account created successfully! Please sign in.');
        
        // Clear password field for security, but keep username for convenience
        setFormData(prev => ({ ...prev, password: '' }));
      }
    }, 1200);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setSuccessMessage(''); 
    setError('');
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
            {isLogin ? 'Access Workspace' : 'Join the elite'}
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            {isLogin ? 'Enter your credentials to continue.' : 'Create an account to start downloading assets.'}
          </p>
        </div>

        {successMessage && (
          <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400 text-sm animate-fade-in">
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm animate-fade-in">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field - Always Visible (Replaces Full Name & Email for Login) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Username</label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required 
                className="w-full bg-gray-950/80 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm shadow-inner"
                placeholder="vfx_editor"
              />
            </div>
          </div>

          {/* Email Field - Sign Up Only */}
          {!isLogin && (
            <div className="space-y-1.5 animate-fade-in">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full bg-gray-950/80 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm shadow-inner"
                  placeholder="editor@example.com"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Password</label>
                {isLogin && <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot?</a>}
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
                        {isLogin ? 'Authenticating...' : 'Creating Account...'}
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
            onClick={toggleAuthMode} 
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