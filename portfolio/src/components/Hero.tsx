"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa6";
import avatarPic from "../../public/kusbxd.jpg";

export function Hero() {
  const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      smoothScrollTo(targetPosition, 800);
    }
  };

  const socials = [
    { icon: FaGithub, href: "https://github.com/kusbxd", label: "GitHub" },
    { icon: FaDiscord, href: "https://discord.com/users/kusbb", label: "Discord" },
    { icon: FaTelegram, href: "https://t.me/kusbxd", label: "Telegram" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"
            />
            Открыт для новых проектов
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
            Привет, я{" "}
            <span className="relative inline-block group cursor-pointer">
              <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Кусь
              </span>
              
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 sm:mb-6 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50 hidden sm:block">
                <div className="bg-[#18181b] border border-zinc-800 rounded-2xl p-4 sm:p-5 w-[280px] sm:w-[320px] shadow-xl text-left font-sans tracking-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 bg-zinc-800 relative">
                      <Image 
                        src={avatarPic}
                        alt="kusbxd"
                        fill
                        sizes="80px"
                        quality={100}
                        className="object-cover"
                        placeholder="blur"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white text-sm font-medium tracking-normal">kusbxd</span>
                        <span className="text-zinc-500 text-xs tracking-normal">Сейчас</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed font-normal tracking-normal" style={{ wordSpacing: 'normal', letterSpacing: 'normal' }}>
                        Йо! Пишу код, делаю сайты и вообще люблю когда всё работает красиво. Если что — пиши, помогу разобраться.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#18181b] rotate-45 border-r border-b border-zinc-800" />
              </div>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
        >
          FullStack Python разработчик. Django, FastAPI, React.
          <br />
          <span className="text-white/70">Бэкенд, фронтенд, микроконтроллеры.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-black font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors"
          >
            Смотреть проекты
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-medium text-sm sm:text-base hover:bg-white/[0.1] transition-colors"
          >
            Связаться со мной
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
