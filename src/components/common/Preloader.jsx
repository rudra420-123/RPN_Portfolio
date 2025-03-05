import React, { useState, useEffect } from "react";
import "../../assets/css/preloader.css";

const Preloader = ({ setLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(1);

  // Progress for 0% to 100% with horizontal loader (Phase 1)
  useEffect(() => {
    if (phase === 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase(2), 500);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Finish loading after bars animation (Phase 2)
  useEffect(() => {
    if (phase === 2) {
      const timer = setTimeout(() => setLoadingComplete(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, setLoadingComplete]);

  return (
    <>
      {phase === 1 && (
        <div className="phase1-container">
          <div className="horizontal-loader">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loading-text">{progress}%</div>
        </div>
      )}
      {phase === 2 && (
        <div className="phase2-container">
          <div className="bars-container">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                className={`bar ${i % 2 === 0 ? "slide-up" : "slide-down"}`}
                key={i}
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
