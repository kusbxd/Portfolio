"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHouse, FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      
      <div className="text-center z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[120px] sm:text-[180px] md:text-[220px] font-bold leading-none bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Страница не найдена
          </h1>
          <p className="text-white/50 text-base sm:text-lg mb-8 max-w-md mx-auto">
            Похоже, эта страница решила уйти в отпуск. Давайте вернёмся на главную?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-black font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors"
          >
            <FaHouse className="text-sm" />
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-medium text-sm sm:text-base hover:bg-white/[0.1] transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            Назад
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <p className="text-white/20 text-xs sm:text-sm">
            Код ошибки: 404 • Страница не существует
          </p>
        </motion.div>
      </div>
    </main>
  );
}
