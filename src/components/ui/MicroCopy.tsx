interface MicroCopyProps {
  className?: string;
}

export default function MicroCopy({ className = '' }: MicroCopyProps) {
  return (
    <p className={`text-xs text-slate ${className}`}>
      ⚡ Instant download · 💻 Excel + Google Sheets · 🔒 30-day money-back guarantee
    </p>
  );
}
