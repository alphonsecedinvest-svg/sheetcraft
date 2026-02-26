import Image from 'next/image';

interface MockupFrameProps {
  className?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function MockupFrame({ className = '', children, imageSrc, imageAlt = 'Template preview' }: MockupFrameProps) {
  return (
    <div className={`rounded-2xl border border-sc-border shadow-elevated overflow-hidden bg-sc-card ${className}`}>
      {/* Browser bar */}
      <div className="h-8 bg-sc-bg-alt flex items-center px-3 gap-2 border-b border-sc-border">
        <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
      </div>
      {/* Content */}
      {imageSrc ? (
        <div className="bg-sc-bg-alt aspect-[16/10] relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : children ? (
        <div className="bg-sc-bg-alt">{children}</div>
      ) : (
        <div className="bg-sc-bg-alt aspect-[16/10] flex items-center justify-center">
          <div className="grid grid-cols-4 gap-1 w-3/4 h-3/4 p-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="bg-sc-border/50 rounded-sm border border-sc-border" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
