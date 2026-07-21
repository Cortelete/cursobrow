import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface ImagePlaceholderProps {
  name: string;
  className?: string;
}

export function ImagePlaceholder({ name, className = "" }: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = `/${name}`;

  if (!hasError) {
    return (
      <>
        <img 
          src={imageUrl} 
          alt={name} 
          onError={() => setHasError(true)}
          onClick={() => setIsOpen(true)}
          className={`w-full rounded-xl object-cover my-8 shadow-sm cursor-pointer transition-opacity hover:opacity-90 ${className}`}
        />
        {isOpen && <Lightbox images={[name]} initialIndex={0} onClose={() => setIsOpen(false)} />}
      </>
    );
  }

  return (
    <div className={`w-full bg-[#111] border border-stone-800 border-dashed rounded-xl flex flex-col items-center justify-center p-8 text-stone-500 my-8 shadow-sm ${className}`}>

      <ImageIcon className="w-10 h-10 mb-3 opacity-30 stroke-[1.5]" />
      <span className="text-sm font-medium tracking-wide">Espaço reservado para imagem</span>
      <span className="text-xs font-mono bg-black px-3 py-1.5 rounded-md mt-2 border border-stone-800 text-stone-500">{name}</span>
    </div>
  );
}
