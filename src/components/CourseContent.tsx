import React from 'react';
import { Module1 } from './Module1';
import { Module2 } from './Module2';
import { Module3 } from './Module3';
import { Module4 } from './Module4';
import { Module5 } from './Module5';
import { Module6 } from './Module6';

interface CourseContentProps {
  activeSection: string;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function CourseContent({ activeSection, onNext, onPrev, isFirst, isLast }: CourseContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 bg-black min-h-screen pb-24">
      <Module1 activeSection={activeSection} />
      <Module2 activeSection={activeSection} />
      <Module3 activeSection={activeSection} />
      <Module4 activeSection={activeSection} />
      <Module5 activeSection={activeSection} />
      <Module6 activeSection={activeSection} />
      
      {/* Pagination Controls */}
      <div className="fixed bottom-0 left-0 lg:left-64 right-0 p-4 bg-black/80 backdrop-blur-md border-t border-stone-900 flex justify-between items-center z-30">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
            isFirst ? 'opacity-30 cursor-not-allowed text-stone-500' : 'text-white hover:bg-[#111] border border-stone-800'
          }`}
        >
          Anterior
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
            isLast ? 'opacity-30 cursor-not-allowed text-stone-500' : 'bg-gold-500 text-black hover:bg-gold-400 shadow-lg shadow-gold-500/20'
          }`}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
