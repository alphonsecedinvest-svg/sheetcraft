'use client';

import { motion } from 'framer-motion';

interface TrustpilotStarsProps {
  count?: number;
  size?: number;
  animated?: boolean;
  animationDelay?: number;
  showLabel?: boolean;
  reviewCount?: number;
  className?: string;
}

function StarIcon({ size }: { size: number }) {
  const padding = size * 0.15;
  const starSize = size - padding * 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <rect width={size} height={size} rx={size * 0.15} fill="#00B67A" />
      <path
        d={starPath(starSize, padding)}
        fill="white"
      />
    </svg>
  );
}

function starPath(size: number, offset: number): string {
  const cx = offset + size / 2;
  const cy = offset + size / 2;
  const outerR = size / 2;
  const innerR = outerR * 0.38;
  const points = 5;
  const d: string[] = [];

  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    d.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  d.push('Z');
  return d.join(' ');
}

export default function TrustpilotStars({
  count = 5,
  size = 20,
  animated = false,
  animationDelay = 0,
  showLabel = false,
  reviewCount,
  className = '',
}: TrustpilotStarsProps) {
  const stars = [...Array(count)].map((_, i) => {
    const star = <StarIcon key={i} size={size} />;

    if (animated) {
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: animationDelay + i * 0.05, duration: 0.3 }}
        >
          <StarIcon size={size} />
        </motion.div>
      );
    }

    return star;
  });

  return (
    <div className={className}>
      <div className="flex items-center gap-1">
        <div className="flex gap-[3px]">{stars}</div>
        {showLabel && (
          <span className="ml-1.5 text-sm font-semibold text-[#00B67A]">Excellent</span>
        )}
      </div>
      {reviewCount !== undefined && (
        <p className="text-xs text-sc-text-muted mt-1">Based on {reviewCount} reviews</p>
      )}
    </div>
  );
}
