'use client'
import { motion } from 'framer-motion'
import TypingText from '../../components/ui/TypingText'
import FlippableCard from '../../components/ui/FlippableCard'
import Timeline from '../../components/ui/Timeline'
import ProjectsSection from '../../components/ui/ProjectsSection'
import { aboutImages, cardAngles } from '../../components/ui/FlippableCardData'
import { PROJECTS, TIMELINE } from './data'

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
          <div className="flex justify-center -space-x-13 mt-13">
            {aboutImages.map((src, i) => (
              <FlippableCard key={src} src={src} angle={cardAngles[i]} />
            ))}
          </div>
        </motion.section>

        <Timeline
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