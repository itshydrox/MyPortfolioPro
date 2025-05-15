import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  isLoading = false,
  disabled = false,
}) => {
  // Base classes
  const baseClasses = 'select-none relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg active:shadow-sm',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-blue-500 hover:border-blue-600 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50',
    ghost: 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
    gradient: 'text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
    glass: 'backdrop-blur-md bg-white/20 dark:bg-gray-900/20 border border-white/30 dark:border-gray-700/30 text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-gray-900/30 shadow-lg hover:shadow-xl',
  };
  
  // Size classes with updated modern proportions
  const sizeClasses = {
    sm: 'text-sm px-4 py-2 rounded-lg',
    md: 'text-base px-6 py-2.5 rounded-xl',
    lg: 'text-lg px-8 py-3 rounded-xl',
  };

  // Loading spinner classes
  const spinnerClasses = 'animate-spin -ml-1 mr-3 h-4 w-4 text-current';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const renderContent = () => (
    <>
      {isLoading && (
        <svg className={spinnerClasses} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {variant === 'gradient' && (
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      )}
      {variant === 'glass' && (
        <span className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative">{children}</span>
    </>
  );
  
  // Render as link or button
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {renderContent()}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClasses} 
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {renderContent()}
    </button>
  );
};

export default Button;

export type { ButtonProps };