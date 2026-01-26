import { useEffect, useState } from 'react'

type TypingTextProps = {
  text: string
  typingDelay?: number
}

const DEFAULT_TYPING_DELAY = 80
const CURSOR_BLINK_DELAY = 500

export default function TypingText({ text, typingDelay = DEFAULT_TYPING_DELAY }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    setDisplayed('')

    const typing = setInterval(() => {
      index += 1
      setDisplayed(text.slice(0, index))
      if (index >= text.length) {
        clearInterval(typing)
      }
    }, typingDelay)

    return () => clearInterval(typing)
  }, [text, typingDelay])

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor((prev) => !prev), CURSOR_BLINK_DELAY)
    return () => clearInterval(cursorBlink)
  }, [])

  return (
    <h3 className="mb-6 text-lg font-semibold" aria-live="polite">
      {displayed}
      <span className={`inline-block w-2 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </h3>
  )
}
