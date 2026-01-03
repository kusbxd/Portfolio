"use client";

import { Inter } from "next/font/google";
import { FaRotateRight, FaTriangleExclamation } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className} style={{ background: "#0a0a0a", color: "#ffffff", margin: 0 }}>
        <main style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Background effects */}
          <div style={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: "24rem",
            height: "24rem",
            background: "rgba(239, 68, 68, 0.1)",
            borderRadius: "50%",
            filter: "blur(120px)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: "20rem",
            height: "20rem",
            background: "rgba(249, 115, 22, 0.1)",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
          }} />
          
          <div style={{ textAlign: "center", zIndex: 10, maxWidth: "32rem", margin: "0 auto" }}>
            <div style={{
              width: "8rem",
              height: "8rem",
              margin: "0 auto 1.5rem",
              borderRadius: "50%",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <FaTriangleExclamation style={{ fontSize: "3rem", color: "#f87171" }} />
            </div>

            <h1 style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}>
              Критическая ошибка
            </h1>
            
            <p style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "1rem",
              marginBottom: "2rem",
              maxWidth: "28rem",
              margin: "0 auto 2rem",
            }}>
              Произошла серьёзная ошибка приложения. Пожалуйста, попробуйте обновить страницу.
            </p>

            <button
              onClick={reset}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                background: "#f5a524",
                color: "#000000",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.background = "rgba(245, 165, 36, 0.9)"}
              onMouseOut={(e) => e.currentTarget.style.background = "#f5a524"}
            >
              <FaRotateRight style={{ fontSize: "0.875rem" }} />
              Перезагрузить
            </button>

            {error.digest && (
              <p style={{
                color: "rgba(255, 255, 255, 0.2)",
                fontSize: "0.75rem",
                marginTop: "3rem",
                fontFamily: "monospace",
              }}>
                Код ошибки: {error.digest}
              </p>
            )}
          </div>
        </main>
      </body>
    </html>
  );
}
