import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'white', 
  icon = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95 text-sm tracking-wide";
  
  const variants = {
    white: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 border border-indigo-500/50",
    secondary: "bg-gray-800/50 text-white hover:bg-gray-800 hover:shadow-md backdrop-blur-sm",
    outline: "bg-transparent text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;