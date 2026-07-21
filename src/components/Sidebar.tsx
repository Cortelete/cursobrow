import React from 'react';

interface SidebarProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onSelect: (id: string) => void;
}

export function Sidebar({ sections, activeSection, onSelect }: SidebarProps) {
  return (
    <aside className="w-64 fixed left-0 top-0 h-screen bg-[#0a0a0a] text-stone-300 p-8 hidden lg:flex flex-col border-r border-stone-800 z-40">
      <div className="mb-10">
        <h1 className="font-medium text-xl text-gold-500 leading-tight">Design de Sobrancelhas</h1>
        <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mt-3 font-semibold">Módulo 1</p>
      </div>

      <nav className="flex-grow flex flex-col space-y-2 overflow-y-auto pr-2 custom-scrollbar">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center ${
                isActive 
                  ? 'bg-gold-500/10 text-gold-500 font-medium border border-gold-500/20' 
                  : 'text-stone-400 hover:bg-[#111] hover:text-stone-200'
              }`}
            >
              <span className={`w-6 text-[10px] opacity-50 ${isActive ? 'text-gold-500' : ''}`}>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              {section.label}
            </button>
          );
        })}
      </nav>

      <div className="pt-8 border-t border-stone-800 mt-auto">
        <p className="text-xs text-stone-600">Portal Interativo v1.0</p>
      </div>
    </aside>
  );
}
