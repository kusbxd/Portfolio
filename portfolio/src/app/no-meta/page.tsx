"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const badMessages = [
  { text: "Привет", time: "14:01" },
  { text: "Ты тут?", time: "14:01" },
  { text: "Можно вопрос?", time: "14:02" },
  { text: "Ты разбираешься в Python?", time: "14:16" },
  { text: "А в Django?", time: "14:18" },
  { text: "Как сделать авторизацию?", time: "14:35" },
];

const goodMessage = {
  text: "Привет! Делаю проект на Django, нужна помощь с авторизацией через JWT. Использую DRF, но токены не обновляются. Можешь глянуть на код?",
  time: "14:01",
};

const goodResponse = {
  text: "Йо! Скорее всего проблема в настройках SIMPLE_JWT. Скинь свой settings.py и views где создаёшь токены",
  time: "14:03",
};

export default function NoMetaPage() {
  const [activeTab, setActiveTab] = useState<"bad" | "good">("bad");
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTab(prev => prev === "bad" ? "good" : "bad");
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(245,165,36,0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(245,165,36,0.05) 0%, transparent 50%),
              linear-gradient(rgba(245,165,36,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,165,36,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "800px 800px, 600px 600px, 80px 80px, 80px 80px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <motion.div 
        className="fixed top-20 right-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[200px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="fixed bottom-20 left-20 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 px-4 py-6 sm:py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-8 sm:mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-white/30 hover:text-primary transition-all duration-300 group"
          >
            <motion.span 
              className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-current">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
            <span className="text-sm font-medium">Назад к портфолио</span>
          </Link>
        </motion.div>

        {/* Hero section */}
        <motion.div 
          className="max-w-7xl mx-auto mb-12 sm:mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/20 mb-8 backdrop-blur-sm"
            >
              <motion.span 
                className="w-3 h-3 bg-gradient-to-r from-primary to-orange-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-primary text-sm font-semibold tracking-wide">КУЛЬТУРА ОБЩЕНИЯ</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl sm:text-8xl lg:text-9xl font-black mb-8 tracking-tighter"
            >
              <span className="text-white">NO</span>
              <span className="text-transparent bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text animate-gradient bg-[length:200%_auto]">META</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-2xl sm:text-3xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
                Не трать время на пустые сообщения
              </p>
              <p className="text-xl sm:text-2xl text-primary/80 max-w-2xl mx-auto font-medium">
                Задавай вопрос сразу и получай быстрый ответ
              </p>
            </motion.div>

            {/* Auto-play toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex justify-center"
            >
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying 
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : "bg-white/5 text-white/60 border border-white/10 hover:border-white/20"
                }`}
              >
                {isAutoPlaying ? "⏸ Остановить авто-показ" : "▶ Авто-показ примеров"}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive demo */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Tab switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-2 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <motion.button
                onClick={() => setActiveTab("bad")}
                className={`px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === "bad"
                    ? "text-red-400"
                    : "text-white/50 hover:text-white/70"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === "bad" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-red-500/15 border border-red-500/25 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-current">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Неправильно
                </span>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab("good")}
                className={`px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === "good"
                    ? "text-green-400"
                    : "text-white/50 hover:text-white/70"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === "good" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-green-500/15 border border-green-500/25 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-current">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Правильно
                </span>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Chat window */}
          <motion.div 
            className="rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm relative"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 opacity-50" />
            
            {/* Enhanced window header */}
            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#0d0d0d]/90 to-[#111]/90 backdrop-blur-md relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/30"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 0 rgba(239, 68, 68, 0.3)",
                        "0 0 8px 2px rgba(239, 68, 68, 0.4)",
                        "0 0 0 0 rgba(239, 68, 68, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/30"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 0 rgba(234, 179, 8, 0.3)",
                        "0 0 8px 2px rgba(234, 179, 8, 0.4)",
                        "0 0 0 0 rgba(234, 179, 8, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/30"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.3)",
                        "0 0 8px 2px rgba(34, 197, 94, 0.4)",
                        "0 0 0 0 rgba(34, 197, 94, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-white/20 rounded-full" />
                  <span className="text-white/50 text-sm font-medium">Telegram Desktop</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-2xl overflow-hidden relative border-2 border-primary/40 shadow-lg shadow-primary/20"
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: "rgba(245,165,36,0.6)",
                    boxShadow: "0 0 20px rgba(245,165,36,0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/kusbxd.jpg" 
                    alt="kusbxd" 
                    className="w-full h-full object-cover avatar-image"
                    style={{
                      imageRendering: 'auto',
                      filter: 'contrast(1.1) saturate(1.1)',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white/90 text-sm font-bold">kusbxd</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0.5)",
                          "0 0 8px 2px rgba(34, 197, 94, 0.7)",
                          "0 0 0 0 rgba(34, 197, 94, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-green-400 text-xs font-medium">онлайн</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced messages area */}
            <div className="p-8 min-h-[500px] sm:min-h-[550px] relative bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
              <AnimatePresence mode="wait">
                {activeTab === "bad" ? (
                  <motion.div
                    key="bad"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {badMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          delay: i * 0.15,
                          duration: 0.6,
                        }}
                        className="flex items-end gap-4"
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 flex items-center justify-center flex-shrink-0 border border-white/10 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/70">
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </motion.div>
                        <div className="max-w-[70%]">
                          <motion.div 
                            className="px-6 py-4 rounded-3xl rounded-bl-lg bg-gradient-to-br from-white/8 to-white/4 border border-white/10 text-white/90 text-sm leading-relaxed backdrop-blur-sm shadow-lg relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Message glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10">{msg.text}</span>
                          </motion.div>
                          <div className="flex items-center gap-2 mt-2 ml-4">
                            <span className="text-xs text-white/30 font-mono">{msg.time}</span>
                            <div className="w-1 h-1 bg-white/20 rounded-full" />
                            <span className="text-xs text-white/20">доставлено</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Time wasted indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      className="flex justify-center pt-10"
                    >
                      <motion.div 
                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 backdrop-blur-sm relative overflow-hidden"
                      >
                        {/* Animated background glow */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          animate={{
                            background: [
                              "radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 50% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)"
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Pulsing border */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2"
                          animate={{
                            borderColor: [
                              "rgba(239, 68, 68, 0.2)",
                              "rgba(239, 68, 68, 0.4)",
                              "rgba(239, 68, 68, 0.2)"
                            ],
                            boxShadow: [
                              "0 0 0 0 rgba(239, 68, 68, 0.1)",
                              "0 0 15px 2px rgba(239, 68, 68, 0.3)",
                              "0 0 0 0 rgba(239, 68, 68, 0.1)"
                            ]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        <span className="text-red-400 text-sm font-semibold flex items-center gap-2 relative z-10">
                          <motion.svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            className="text-current"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          >
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                          34 минуты потрачено впустую
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="good"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-end gap-4"
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-lg flex-shrink-0 border border-green-500/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </motion.div>
                      <div className="max-w-[85%]">
                        <motion.div 
                          className="px-5 py-4 rounded-2xl rounded-bl-md bg-gradient-to-br from-white/8 to-white/4 border border-white/10 text-white/90 text-sm leading-relaxed backdrop-blur-sm"
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.1)" }}
                        >
                          {goodMessage.text}
                        </motion.div>
                        <span className="text-xs text-white/30 ml-3 mt-2 block font-mono">{goodMessage.time}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="flex items-end gap-4 justify-end"
                    >
                      <div className="max-w-[85%]">
                        <motion.div 
                          className="px-5 py-4 rounded-2xl rounded-br-md bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/30 text-white/95 text-sm leading-relaxed backdrop-blur-sm"
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(245,165,36,0.25)" }}
                        >
                          {goodResponse.text}
                        </motion.div>
                        <span className="text-xs text-white/30 mr-3 mt-2 block text-right font-mono">{goodResponse.time}</span>
                      </div>
                      <motion.div 
                        className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-primary/40"
                        whileHover={{ scale: 1.1, borderColor: "rgba(245,165,36,0.6)" }}
                      >
                        <img 
                          src="/kusbxd.jpg" 
                          alt="kusbxd" 
                          className="w-full h-full object-cover avatar-image"
                          style={{
                            imageRendering: 'auto',
                            filter: 'contrast(1.1) saturate(1.1)',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Success indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="flex justify-center pt-10"
                    >
                      <motion.div 
                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm relative overflow-hidden"
                      >
                        {/* Animated background glow */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          animate={{
                            background: [
                              "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)"
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Pulsing border */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2"
                          animate={{
                            borderColor: [
                              "rgba(34, 197, 94, 0.2)",
                              "rgba(34, 197, 94, 0.4)",
                              "rgba(34, 197, 94, 0.2)"
                            ],
                            boxShadow: [
                              "0 0 0 0 rgba(34, 197, 94, 0.1)",
                              "0 0 15px 2px rgba(34, 197, 94, 0.3)",
                              "0 0 0 0 rgba(34, 197, 94, 0.1)"
                            ]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        <span className="text-green-400 text-sm font-semibold flex items-center gap-2 relative z-10">
                          <motion.svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            className="text-current"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                          2 минуты — и уже решаем проблему
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Rules section */}
        <motion.div 
          className="max-w-7xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
            >
              <motion.svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-primary"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
              <span className="text-white/70 text-sm font-semibold">ПРАВИЛА</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            >
              Эффективное общение
            </motion.h2>
            
            <motion.p
              className="text-lg text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Четыре простых принципа, которые сэкономят время всем участникам беседы
            </motion.p>
          </div>
          
          {/* Rules grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                num: "01", 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ), 
                title: "Суть сразу", 
                desc: "Формулируй вопрос в первом сообщении, не растягивай на несколько"
              },
              { 
                num: "02", 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ), 
                title: "Контекст", 
                desc: "Объясни что делаешь, какую ошибку получаешь, что уже пробовал"
              },
              { 
                num: "03", 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ), 
                title: "Код и ссылки", 
                desc: "Прикладывай код, скриншоты, ссылки на репозиторий или документацию"
              },
              { 
                num: "04", 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ), 
                title: "Терпение", 
                desc: "Дай время на ответ, не дублируй сообщения каждые 5 минут"
              },
            ].map((rule, i) => (
              <motion.div
                key={rule.num}
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.2, 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
                className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm cursor-default group overflow-hidden hover:bg-white/[0.04] hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-200">
                    <div className="text-white/70 group-hover:text-primary transition-colors duration-200">
                      {rule.icon}
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary/70 text-xs font-mono font-bold tracking-wider bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-200">
                      {rule.num}
                    </span>
                    <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent flex-1" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold mb-4 text-xl group-hover:text-primary transition-colors duration-200">
                    {rule.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                    {rule.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group cursor-default"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.08)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-primary"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
              <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                Следуй этим правилам и получай быстрые ответы
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pb-12"
        >
          <motion.a
            href="https://nometa.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/30 hover:text-primary transition-all duration-300 text-sm group"
            whileHover={{ scale: 1.05 }}
          >
            <span>Вдохновлено</span>
            <span className="font-semibold">nometa.xyz</span>
            <motion.span
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}