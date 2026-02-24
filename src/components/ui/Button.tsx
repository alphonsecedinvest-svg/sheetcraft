import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-black font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]',
  secondary:
    'bg-transparent text-white border border-white/20 font-semibold text-sm px-8 py-[14px] rounded-full transition-all duration-200 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]',
  ghost:
    'text-sc-text-muted font-medium underline underline-offset-[3px] transition-colors duration-200 hover:text-white',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} inline-block text-center min-h-[48px] ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
