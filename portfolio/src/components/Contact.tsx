"use client";

import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa6";

const contacts = [
  {
    icon: FaTelegram,
    name: "Telegram",
    handle: "@kusbxd",
    href: "https://t.me/kusbxd",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    handle: "@kusbb",
    href: "https://discord.com/users/kusbb",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    handle: "@kusbxd",
    href: "https://github.com/kusbxd",
  },
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-6 sm:mb-8">
            Открыт для проектов
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Давайте работать
            <br />
            <span className="italic text-primary">вместе</span>
          </h2>
          
          <p className="text-white/40 text-base sm:text-lg mb-8 sm:mb-12 max-w-md mx-auto px-4">
            Есть идея или проект? Напишите мне, обсудим детали
          </p>

          <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 sm:gap-3"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-200">
                  <contact.icon className="text-lg sm:text-xl text-white/50 group-hover:text-primary transition-colors duration-200" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs sm:text-sm font-medium">{contact.name}</p>
                  <p className="text-white/30 text-[10px] sm:text-xs hidden sm:block">{contact.handle}</p>
                </div>
              </a>
            ))}
          </div>

          {/* No-meta notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <motion.a
              href="/no-meta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm group hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                <motion.svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-primary"
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </div>
              <div className="text-left flex-1">
                <p className="text-white/90 text-sm sm:text-base font-medium mb-1 group-hover:text-white transition-colors duration-300">
                  Перед тем как писать
                </p>
                <p className="text-white/50 text-xs sm:text-sm group-hover:text-white/70 transition-colors duration-300">
                  Ознакомьтесь с правилами эффективного общения
                </p>
              </div>
              <motion.div
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] group-hover:border-white/[0.2] transition-all duration-300"
                whileHover={{ x: 2 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/60 group-hover:text-white/90 transition-colors duration-300">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>

          <a
            href="https://t.me/kusbxd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary hover:bg-primary/90 text-black font-medium text-sm sm:text-base transition-colors duration-200"
          >
            <FaTelegram className="text-base sm:text-lg" />
            Написать в Telegram
          </a>
          
          <p className="text-white/20 text-xs sm:text-sm mt-4 sm:mt-6">
            Отвечаю быстрее всего в Telegram ⚡
          </p>
        </motion.div>
      </div>
    </section>
  );
}
