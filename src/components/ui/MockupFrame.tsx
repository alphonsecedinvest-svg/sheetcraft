import Image from 'next/image';

interface MockupFrameProps {
  className?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function MockupFrame({ className = '', children, imageSrc, imageAlt = 'Template preview' }: MockupFrameProps) {
  return (
    <div className={`rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}>
      {/* Browser bar */}
      <div className="h-8 bg-sc-bg-alt flex items-center px-3 gap-2">
        <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
      </div>
      {/* Content */}
      <div className="bg-sc-bg-alt aspect-[16/10] flex items-center justify-center relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : children ? (
          children
        ) : (
          <div className="w-full h-full bg-sc-bg-alt flex items-center justify-center">
            <div className="grid grid-cols-4 gap-1 w-3/4 h-3/4 p-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-white/5 rounded-sm border border-white/5" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
