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
    'bg-amber text-white font-heading font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded-lg shadow-button hover:bg-amber-hover hover:shadow-[0_4px_12px_rgba(232,146,47,0.45)] transition-all duration-200 hover:-translate-y-[1px]',
  secondary:
    'bg-transparent text-navy border-2 border-navy font-heading font-semibold uppercase tracking-wider text-sm px-8 py-[14px] rounded-lg transition-all duration-200 hover:bg-navy hover:text-white',
  ghost:
    'text-amber font-body font-medium underline underline-offset-[3px] transition-colors duration-200 hover:text-amber-hover',
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
