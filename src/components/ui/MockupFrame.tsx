interface MockupFrameProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MockupFrame({ className = '', children }: MockupFrameProps) {
  return (
    <div className={`rounded-lg border border-black/10 shadow-[0_20px_40px_rgba(27,43,75,0.12)] overflow-hidden ${className}`}>
      {/* Browser bar */}
      <div className="h-8 bg-[#F0F0F0] flex items-center px-3 gap-2">
        <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
      </div>
      {/* Content */}
      <div className="bg-white aspect-[16/10] flex items-center justify-center">
        {children || (
          <div className="w-full h-full bg-cloud flex items-center justify-center">
            <div className="grid grid-cols-4 gap-1 w-3/4 h-3/4 p-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-white/80 rounded-sm border border-navy/5" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
