import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Mail, KeyRound, Sparkles } from 'lucide-react';
import GoogleLoginButton from './GoogleLoginButton';

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md">
      {/* Background glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="glass-panel rounded-2xl p-8 relative z-10 border border-white/10 shadow-[0_0_50px_rgba(37,244,238,0.1)]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-black border border-white/10 mb-6 shadow-[0_0_30px_rgba(254,44,85,0.4)] overflow-hidden p-1.5 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#25F4EE]/20 to-[#FE2C55]/20 mix-blend-overlay"></div>
            <img src="/crab-logo.png" alt="Crab Logo" className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter mb-2 text-white glitch-hover">AI Subtitle Studio</h1>
          <p className="text-zinc-400 font-medium">Create viral captions instantly</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">Email</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-500 transition-colors group-focus-within:text-blue-400" />
              <Input
                type="email"
                placeholder="developer@adobe.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">Password</label>
            <div className="relative group">
              <KeyRound className="absolute left-3 top-3 h-5 w-5 text-zinc-500 transition-colors group-focus-within:text-blue-400" />
              <Input
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full mt-6 h-11 text-base font-semibold" isLoading={isLoading}>
            Sign In with Email
          </Button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#18181b] px-3 text-zinc-500">Or continue with</span>
            </div>
          </div>

          <GoogleLoginButton />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
