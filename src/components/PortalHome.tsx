import React, { useState } from 'react';
import { Lock, Unlock, ArrowRight, Key, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../App';

interface PortalHomeProps {
  unlockedCourses: number[];
  onUnlock: (courseId: number, code: string) => boolean;
  onEnter: (courseId: number) => void;
}

const COURSE_DETAILS = {
  1: {
    desc: 'Aprenda os fundamentos, visagismo, mapeamento facial e a estrutura do pelo.',
    img: 'capa_modulo1.png',
  },
  2: {
    desc: 'Especialize-se na aplicação de henna, colorimetria e durabilidade do procedimento.',
    img: 'capa_modulo2.png',
  },
  3: {
    desc: 'Domine a tintura de fios, técnicas de aplicação e obtenha resultados naturais.',
    img: 'capa_modulo3.png',
  },
  4: {
    desc: 'Tratamento estético com argiloterapia, alta frequência e ativos cosméticos.',
    img: 'capa_modulo4.png',
  },
  5: {
    desc: 'Protocolo de reparação e estímulo com microagulhamento e blend cosmético.',
    img: 'capa_modulo5.png',
  }
};

export function PortalHome({ unlockedCourses, onUnlock, onEnter }: PortalHomeProps) {
  const [unlockingId, setUnlockingId] = useState<number | null>(null);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLashModalOpen, setIsLashModalOpen] = useState(false);

  const handleUnlock = (e: React.FormEvent, courseId: number) => {
    e.preventDefault();
    const success = onUnlock(courseId, code);
    if (success) {
      setUnlockingId(null);
      setCode('');
      setError('');
    } else {
      setError('Código de acesso inválido.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-stone-300 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center pt-8">
          <img src="/logo.png" alt="Logo" className="h-16 mx-auto mb-6 opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Portal de Cursos</h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Bem-vindo(a) ao seu ambiente virtual de aprendizagem. Selecione o curso para iniciar ou insira seu código de acesso.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map(course => {
            const isUnlocked = unlockedCourses.includes(course.id);
            const isUnlocking = unlockingId === course.id;
            const details = COURSE_DETAILS[course.id as keyof typeof COURSE_DETAILS];

            return (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0a0a0a] border border-stone-800 rounded-2xl overflow-hidden flex flex-col group hover:border-gold-500/30 transition-colors"
              >
                <div className="h-48 relative overflow-hidden bg-[#111]">
                  <img 
                    src={`/${details.img}`} 
                    alt={course.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    onError={(e) => {
                       e.currentTarget.style.display = 'none';
                    }}
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-black/80 p-4 rounded-full border border-stone-800">
                        <Lock className="w-6 h-6 text-stone-400" />
                      </div>
                    </div>
                  )}
                  {isUnlocked && (
                    <div className="absolute top-4 right-4 bg-gold-500/20 backdrop-blur-md p-2 rounded-full border border-gold-500/30">
                      <Unlock className="w-4 h-4 text-gold-500" />
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-white mb-3">{course.title}</h3>
                  <p className="text-stone-400 text-sm mb-6 flex-grow">{details.desc}</p>

                  <AnimatePresence mode="wait">
                    {isUnlocked ? (
                      <motion.button
                        key="enter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => onEnter(course.id)}
                        className="w-full bg-gold-500 hover:bg-gold-400 text-black font-medium py-3 rounded-xl flex items-center justify-center transition-colors"
                      >
                        Acessar Curso <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    ) : isUnlocking ? (
                      <motion.form 
                        key="unlock"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        onSubmit={(e) => handleUnlock(e, course.id)}
                        className="space-y-3"
                      >
                        <div>
                          <input 
                            type="text" 
                            placeholder="Código de acesso" 
                            value={code}
                            onChange={(e) => {
                              setCode(e.target.value.toUpperCase());
                              setError('');
                            }}
                            className="w-full bg-[#111] border border-stone-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold-500 text-center font-mono tracking-widest uppercase"
                            autoFocus
                          />
                          {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
                        </div>
                        <div className="flex gap-2">
                          <button 
                            type="button" 
                            onClick={() => {
                              setUnlockingId(null);
                              setCode('');
                              setError('');
                            }}
                            className="flex-1 bg-[#111] hover:bg-[#1a1a1a] text-stone-300 py-2.5 rounded-lg transition-colors border border-stone-800"
                          >
                            Cancelar
                          </button>
                          <button 
                            type="submit" 
                            className="flex-1 bg-white hover:bg-stone-200 text-black font-medium py-2.5 rounded-lg transition-colors"
                          >
                            Liberar
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.button
                        key="lock"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setUnlockingId(course.id)}
                        className="w-full bg-[#111] hover:bg-[#1a1a1a] text-stone-300 border border-stone-800 font-medium py-3 rounded-xl flex items-center justify-center transition-colors"
                      >
                        <Key className="w-4 h-4 mr-2" /> Inserir Código
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

          {/* Lash Design External Course */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a0a0a] border border-stone-800 rounded-2xl overflow-hidden flex flex-col group hover:border-gold-500/30 transition-colors"
          >
            <div className="h-48 relative overflow-hidden bg-[#111]">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-black flex items-center justify-center">
                <span className="text-gold-500 font-serif text-3xl opacity-50 tracking-wider">LASH DESIGN</span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-medium text-white mb-3">Lash Design</h3>
              <p className="text-stone-400 text-sm mb-6 flex-grow">Aprenda técnicas avançadas de extensão de cílios, mapping e obtenha resultados duradouros em nosso curso exclusivo.</p>
              
              <button
                onClick={() => setIsLashModalOpen(true)}
                className="w-full bg-[#111] hover:bg-[#1a1a1a] text-stone-300 border border-stone-800 font-medium py-3 rounded-xl flex items-center justify-center transition-colors"
              >
                Acessar / Conhecer <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>


      </div>

      <AnimatePresence>
        {isLashModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0a0a0a] border border-stone-800 rounded-2xl max-w-md w-full overflow-hidden relative"
            >
              <button 
                onClick={() => setIsLashModalOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-md hover:bg-stone-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-8 pt-10">
                <h2 className="text-2xl font-serif text-white mb-4">Curso Lash Design</h2>
                <p className="text-stone-400 mb-8 leading-relaxed">
                  Este curso está hospedado em nossa plataforma exclusiva focada para Lash Designers. Escolha uma das opções abaixo:
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://luxbook.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-gold-500 hover:bg-gold-400 text-black font-medium py-3.5 rounded-xl text-center transition-colors shadow-lg shadow-gold-500/10"
                  >
                    Já sou aluna (Acessar Portal)
                  </a>
                  
                  <a 
                    href="https://luxacademy.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-[#111] hover:bg-[#1a1a1a] text-stone-300 border border-stone-800 font-medium py-3.5 rounded-xl text-center transition-colors"
                  >
                    Quero conhecer o curso
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
