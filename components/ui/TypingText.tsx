import { useState, useEffect } from "react";


type TypingTextProps
  = {
    text: string;
  };

export default function TypingText({ text }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, [text]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <h3 className="text-lg font-bold mb-6">
      {displayed}
      <span className={`inline-block w-2 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
    </h3>
  );
}