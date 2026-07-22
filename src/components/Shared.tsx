import React from 'react';

export function TimelineItem({ period, desc, isLast = false }: { period: string, desc: string, isLast?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute -left-[17px] md:-left-[29px] top-1 w-3 h-3 rounded-full border-2 border-black bg-gold-500"></div>
      <h4 className="text-lg font-medium text-white">{period}</h4>
      <p className="text-stone-400 mt-1">{desc}</p>
    </div>
  );
}

export function CycleCard({ phase, subtitle, desc, features, duration }: { phase: string, subtitle: string, desc: string, features: string[], duration: string }) {
  return (
    <div className="bg-[#111] border border-stone-800 rounded-xl p-6 shadow-sm hover:border-gold-500/50 transition-colors flex flex-col">
      <h4 className="text-xl font-medium text-gold-500">{phase}</h4>
      <p className="text-sm font-semibold tracking-wider text-stone-500 mb-3 uppercase">{subtitle}</p>
      <p className="text-stone-300 mb-4 text-sm flex-grow">{desc}</p>
      {features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {features.map((f, i) => (
            <li key={i} className="text-xs text-stone-400 flex items-center">
              <span className="w-1 h-1 rounded-full bg-gold-500 mr-2"></span> {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-4 border-t border-stone-800 text-sm flex items-center">
        <span className="text-stone-500 font-semibold uppercase text-[10px] tracking-wider mr-2">Duração:</span>
        <span className="text-stone-200 font-medium">{duration}</span>
      </div>
    </div>
  );
}

export function FaceShapeCard({ title, desc, obj, ind, avoid }: { title: string, desc?: string, obj?: string, ind?: string, avoid?: string }) {
  return (
    <div className="bg-[#111] border border-stone-800 p-5 rounded-xl shadow-sm">
      <h5 className="font-medium text-lg text-gold-500 border-b border-stone-800 pb-2 mb-3">{title}</h5>
      {desc && <p className="text-stone-300 text-sm mb-2">{desc}</p>}
      {obj && <p className="text-sm mb-1"><span className="font-semibold text-white mr-1">Objetivo:</span> <span className="text-stone-400">{obj}</span></p>}
      {ind && <p className="text-sm mb-1"><span className="font-semibold text-white mr-1">Indicado:</span> <span className="text-stone-400">{ind}</span></p>}
      {avoid && <p className="text-sm"><span className="font-semibold text-red-400 mr-1">Evitar:</span> <span className="text-stone-400">{avoid}</span></p>}
    </div>
  );
}

export function MaterialItem({ name, desc }: { name: string, desc: string }) {
  return (
    <div className="flex flex-col border-b border-stone-800 pb-3">
      <span className="font-medium text-white text-lg">{name}</span>
      <span className="text-stone-400 text-sm mt-1">{desc}</span>
    </div>
  );
}

export function Step({ num, text }: { num: number, text: string }) {
  return (
    <li className="flex items-start">
      <span className="text-gold-500 font-medium w-6 shrink-0">{num}.</span>
      <span>{text}</span>
    </li>
  );
}
