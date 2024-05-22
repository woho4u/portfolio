"use client";
import React, { useEffect, useState } from "react";

interface LettersProps {
  words: string[];
  colors: string[];
}

const Letters = ({ words, colors }: LettersProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [applyBehind, setApplyBehind] = useState(false);
  const [outLetterIndex, setOutLetterIndex] = useState(-1);
  const [transitionOut, setTransitionOut] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setTransitionOut(true);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(wordInterval);
  }, [words.length]);

  useEffect(() => {
    if (transitionOut) {
      const outInterval = setInterval(() => {
        setOutLetterIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearInterval(outInterval);
    }
  }, [transitionOut]);

  useEffect(() => {
    if (!applyBehind) {
      const behindTimeout = setTimeout(() => {
        setApplyBehind(true);
      }, 50);
      return () => clearTimeout(behindTimeout);
    }
  }, [applyBehind]);

  useEffect(() => {
    if (applyBehind && currentLetterIndex < words[currentWordIndex].length) {
      const letterInterval = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearInterval(letterInterval);
    }
  }, [applyBehind, currentLetterIndex, currentWordIndex, words]);

  useEffect(() => {
    if (outLetterIndex === words[currentWordIndex].length) {
      setCurrentWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        setCurrentLetterIndex(-1); // Reset letter index for the new word
        setOutLetterIndex(-1); // Reset out letter index for the new word
        setApplyBehind(false); // Reset behind application
        setTransitionOut(false); // Reset transition out state
        return nextIndex;
      });
    }
  }, [outLetterIndex, words, currentWordIndex]);

  return (
    <>
      {words.map((word, wordIndex) => (
        <div className={`word ${colors[wordIndex]}`} key={wordIndex}>
          {word.split("").map((letter, letterIndex) => {
            let className = "out";
            if (wordIndex === currentWordIndex) {
              if (transitionOut && letterIndex <= outLetterIndex) {
                className = "out";
              } else if (letterIndex <= currentLetterIndex) {
                className = "in";
              } else if (applyBehind) {
                className = "behind";
              }
            }
            return (
              <span key={letterIndex} className={`letter ${className}`}>
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </>
  );
};

const Hero = () => {
  const words = [
    "Oliver Kvamme Eriksen.",
    "a developer.",
    "a graphic designer.",
    "a learner.",
  ];
  const colors = ["wisteria", "belize", "pomegranate", "green"];

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title">
            <p>Hello, I am</p>
            <Letters colors={colors} words={words} />
            <p className="hero-word-container"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
