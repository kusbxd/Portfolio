"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  emoji?: string;
  logo?: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "gdub",
    name: "G-Dub",
    shortDesc: "Аниме платформа",
    fullDesc: "Полноценный сайт для просмотра аниме в озвучке от студии G-DUB. Каталог тайтлов, плеер, личный кабинет, система комментариев и уведомления о новых сериях.",
    logo: "/gdub.ico",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    link: "https://gdub.ru",
  },
  {
    id: "diamondrp",
    name: "Diamond RP",
    shortDesc: "GTA SAMP сервер",
    fullDesc: "Один из крупнейших русскоязычных серверов GTA San Andreas Multiplayer. Был главным дизайнером проекта — разрабатывал визуальный стиль, интерфейсы и графические материалы.",
    emoji: "💎",
    tags: ["Дизайн", "UI/UX", "Photoshop", "Figma"],
  },
  {
    id: "polytechstyle",
    name: "PolytechStyle",
    shortDesc: "Виртуальная примерка",
    fullDesc: "Учебный проект с возможностью виртуальной примерки одежды на себе и создания персонального гардероба на основе ИИ.",
    emoji: "👔",
    tags: ["React", "Next.js", "AI", "Computer Vision"],
    link: "https://polytechstyle.ru",
  },
];

const duplicatedProjects = [...projects, ...projects];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Мои <span className="italic text-primary">проекты</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-lg">
            Сервера, семьи и проекты с которыми я работаю
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-scroll-left w-max">
            {duplicatedProjects.map((project, i) => (
              <button
                key={`${project.id}-${i}`}
                onClick={() => setSelectedProject(project)}
                className="flex-shrink-0 group text-left w-56 sm:w-80"
              >
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-200 h-full">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {project.logo ? (
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/[0.05] flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image src={project.logo} alt={project.name} width={36} height={36} className="rounded w-6 h-6 sm:w-9 sm:h-9" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/[0.05] flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">
                        {project.emoji}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-semibold text-xs sm:text-base text-white group-hover:text-primary transition-colors duration-200 truncate">
                        {project.name}
                      </h3>
                      <p className="text-white/40 text-[10px] sm:text-sm truncate">{project.shortDesc}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-md sm:max-w-2xl mx-auto mt-10 sm:mt-16 px-4"
      >
        <div className="grid grid-cols-4 gap-2 sm:gap-12 text-center">
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary">3+</div>
            <div className="text-white/30 text-[10px] sm:text-sm">крупных</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary">20+</div>
            <div className="text-white/30 text-[10px] sm:text-sm">мелких</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary">25K+</div>
            <div className="text-white/30 text-[10px] sm:text-sm">юзеров</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary">3+</div>
            <div className="text-white/30 text-[10px] sm:text-sm">года</div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-lg w-full mx-4"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                {selectedProject.logo ? (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/[0.05] flex items-center justify-center overflow-hidden">
                    <Image src={selectedProject.logo} alt={selectedProject.name} width={48} height={48} className="rounded w-8 h-8 sm:w-12 sm:h-12" />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/[0.05] flex items-center justify-center text-2xl sm:text-4xl">
                    {selectedProject.emoji}
                  </div>
                )}
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold">{selectedProject.name}</h3>
                  <p className="text-white/40 text-xs sm:text-sm">{selectedProject.shortDesc}</p>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-4 sm:mb-6">
                {selectedProject.fullDesc}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full bg-white/[0.05] text-white/50 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 sm:gap-3">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 sm:py-3 rounded-xl bg-primary text-black font-semibold text-sm text-center hover:bg-primary/90 transition-colors duration-200"
                  >
                    Открыть сайт
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-2.5 sm:py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white text-sm hover:bg-white/[0.1] transition-colors duration-200"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
