"use client";

import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase, FaMicrochip, FaGraduationCap } from "react-icons/fa6";

const skills = [
  {
    icon: FaServer,
    title: "Backend",
    desc: "Создание надёжной серверной логики и API",
    tags: ["Python", "Django", "FastAPI", "DRF", "REST API", "JWT"],
  },
  {
    icon: FaCode,
    title: "Frontend",
    desc: "Интерактивные интерфейсы и SPA приложения",
    tags: ["React", "TypeScript", "JavaScript", "Next.js", "TailwindCSS"],
  },
  {
    icon: FaDatabase,
    title: "Базы данных",
    desc: "Проектирование и оптимизация БД",
    tags: ["PostgreSQL", "SQLite", "Redis", "Prisma", "SQL"],
  },
  {
    icon: FaMicrochip,
    title: "Embedded & C/C++",
    desc: "Программирование микроконтроллеров",
    tags: ["C", "C++", "STM32", "ESP32", "Arduino"],
  },
  {
    icon: FaGraduationCap,
    title: "Учебные проекты",
    desc: "Курсовые работы и полный цикл разработки",
    tags: ["Архитектура", "ООП", "Документация", "Git"],
  },
];

const devops = ["Docker", "Linux", "Nginx", "Git", "GitHub"];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Мои <span className="italic text-primary">навыки</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-lg max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
            FullStack Python разработчик с фокусом на бэкенд
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16"
        >
          {devops.map((tool) => (
            <span
              key={tool}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50"
            >
              {tool}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group ${i === 3 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200 h-full">
                <skill.icon className="text-xl sm:text-2xl mb-3 sm:mb-4 text-white/30 group-hover:text-primary transition-colors duration-200" />
                
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-200">
                  {skill.title}
                </h3>
                
                <p className="text-white/40 text-xs sm:text-sm mb-3 sm:mb-5">
                  {skill.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-primary font-semibold text-sm sm:text-base mb-1">ООП & Паттерны</div>
              <p className="text-white/40 text-xs sm:text-sm">Глубокое понимание ООП</p>
            </div>
            <div>
              <div className="text-primary font-semibold text-sm sm:text-base mb-1">REST API</div>
              <p className="text-white/40 text-xs sm:text-sm">Проектирование и документирование</p>
            </div>
            <div>
              <div className="text-primary font-semibold text-sm sm:text-base mb-1">Командная работа</div>
              <p className="text-white/40 text-xs sm:text-sm">Совместное создание решений</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
