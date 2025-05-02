import { useState, useEffect } from "react";

export default function TypingText() {
  const words = ["Web Developer", "Freelancer"]; // Text to cycle
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 100 : 100; // Faster delete, slower type

  useEffect(() => {
    const currentWord = words[wordIndex];

    const updateText = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1)); // Typing effect
        setCharIndex(charIndex + 1);
      } else {
        setText(currentWord.substring(0, charIndex - 1)); // Deleting effect
        setCharIndex(charIndex - 1);
      }
    };

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timer = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className=" font-bold text-5xl text-[rgb(220,160,160)]">
      {text}
      <span className="animate-blink text-blue-200">|</span>
    </div>
  );
}
