'use client'
import { motion } from 'motion/react'
import TypingText from '@/components/ui/TypingText'
import FlippableCard from '@/components/ui/FlippableCard'
import TimelineSection from '@/components/ui/TimelineSection'
import ProjectsSection from '@/components/ui/ProjectsSection'
import { ABOUT_CARDS, PROJECTS, TIMELINE } from '@/data/site'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const VARIANTS_CARD = {
  hidden: { opacity: 0, y: 24, rotate: -4, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 20 },
  },
}

export default function Personal() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <motion.main
        className="space-y-24"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <TypingText text="hey, audy here" />
          <div className="flex justify-start sm:justify-center -space-x-6 sm:-space-x-10 mt-10">
            {ABOUT_CARDS.map(({ src, angle }, index) => (
              <motion.div
                key={`${angle}-${index}`}
                className={index > 1 ? 'hidden sm:block' : ''}
                variants={VARIANTS_CARD}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.08 * index }}
              >
                <FlippableCard src={src} angle={angle} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <TimelineSection
          items={TIMELINE}
          variantsSection={VARIANTS_SECTION}
          transitionSection={TRANSITION_SECTION}
        />

        <ProjectsSection
          projects={PROJECTS}
          variantsSection={VARIANTS_SECTION}
          transitionSection={TRANSITION_SECTION}
        />
      </motion.main>
    </div>
  )
}