import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/customCursor.css";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const cursorRef = useRef(null);

  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  const lerpFactor = 0.01;

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      cursorPosition.current.x +=
        (mousePosition.current.x - cursorPosition.current.x) * lerpFactor;
      cursorPosition.current.y +=
        (mousePosition.current.y - cursorPosition.current.y) * lerpFactor;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0)`;
      }
      requestAnimationFrame(followMouse);
    };
    requestAnimationFrame(followMouse);
  }, []);
  const cursorClasses = `custom-cursor ${
    hovered ? "custom-cursor-hover" : ""
  } ${isVisible ? "visible" : "hidden"}`;
  return <div className={cursorClasses} ref={cursorRef} />;
};

export default CustomCursor;
