import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative group my-8">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/90 text-gold-500 p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-gold-500/20 hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 custom-scrollbar"
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-[85%] md:min-w-[60%] lg:min-w-[45%] snap-center flex-shrink-0 cursor-pointer" onClick={() => setLightboxIndex(idx)}>
               <CarouselImage name={img} />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/90 text-gold-500 p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-gold-500/20 hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          images={images} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}
    </>
  );
}

function CarouselImage({ name }: { name: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="w-full h-64 bg-[#111] border border-stone-800 border-dashed rounded-xl flex flex-col items-center justify-center p-4 text-stone-500 shadow-sm">
        <span className="text-xs font-mono bg-black px-2 py-1 rounded border border-stone-800">{name}</span>
      </div>
    );
  }

  return (
    <img 
      src={`/${name}`} 
      alt={name} 
      onError={() => setHasError(true)}
      className="w-full h-64 rounded-xl object-cover shadow-sm transition-opacity hover:opacity-90"
    />
  );
}
