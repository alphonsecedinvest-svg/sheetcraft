import { Lock, Zap, RefreshCw, Monitor } from 'lucide-react';

const badges = [
  { icon: Lock, text: 'Secure checkout' },
  { icon: Zap, text: 'Instant download' },
  { icon: RefreshCw, text: '30-day money-back guarantee' },
  { icon: Monitor, text: 'Works on Mac & PC' },
];

interface TrustBadgesProps {
  className?: string;
  variant?: 'inline' | 'stacked';
}

export default function TrustBadges({ className = '', variant = 'inline' }: TrustBadgesProps) {
  if (variant === 'stacked') {
    return (
      <div className={`space-y-2 ${className}`}>
        {badges.map((badge) => (
          <div key={badge.text} className="flex items-center gap-2 text-sm text-slate">
            <badge.icon size={14} className="text-green shrink-0" />
            {badge.text}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1.5 ${className}`}>
      {badges.map((badge) => (
        <span key={badge.text} className="flex items-center gap-1.5 text-xs text-slate">
          <badge.icon size={12} className="text-green shrink-0" />
          {badge.text}
        </span>
      ))}
    </div>
  );
}
