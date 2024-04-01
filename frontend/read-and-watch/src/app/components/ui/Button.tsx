import clsx from 'clsx';

// Created an interface that extends the generic type React.ButtonHTMLAttributes so all
// button types (onClick, disabled, etc.) can be used.
// The poperties variant and size are optional in case you do not need to have a specific style
// leaving the flexiblitiy for a more stylized button.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'link';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}) => {

  const varientStyles = {
    primary: 'hover:bg-[#535C91] text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
    link: 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white',
  };

  const sizeStyles = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-4 py-2',
    large: 'text-lg px-6 py-3',
  };

  const buttonStyles = clsx(
    'font-bold rounded', // Base styles
    varientStyles[variant], //Variant styles
    sizeStyles[size], // Size styles
    className, // Allows for additional custom styles
  );

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;