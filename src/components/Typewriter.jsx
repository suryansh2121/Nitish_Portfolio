"use client";
import { useState, useEffect } from "react";

const Typewriter = ({
  words = ["Developer", "Designer", "Creator"],
  typingSpeed = 100,
  deletingSpeed = 60,
  delayBetweenWords = 1500,
  loop = true,
  className = "",
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, words, wordIndex, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={`font-mono text-2xl text-blue-500 ${className}`}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
