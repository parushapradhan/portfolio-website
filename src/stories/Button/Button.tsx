import React from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  backgroundColor?: string; // Ensure this prop is added
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'primary',
  onClick,
  label,
  backgroundColor,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition';
  
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'relative inline-block font-semibold bg-white border-2 border-black rounded-xl shadow-button hover:shadow-button-hover active:translate-y-1',
    outline: 'border-2 border-black font-semibold rounded-xl',
  };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
