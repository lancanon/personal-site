'use client'
import { motion} from 'framer-motion'
import Image from 'next/image'
import TypingText from '../../components/ui/TypingText';
import FlippableCard from '../../components/ui/FlippableCard';
import { aboutImages, cardAngles } from '../../components/ui/FlippableCardData';



import {
  PROJECTS,
  TIMELINE,
} from './data'

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
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* About Section */}
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

      {/* Timeline Section */}
      <motion.section
        className="mb-16"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-lg font-bold mb-6">Timeline</h3>
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-zinc-450" />
          <div className="space-y-10">
            {TIMELINE.map((item, idx) => (
              <motion.a
                key={item.company + item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group no-underline"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Dot */}
                <span className={`w-3 h-3 rounded-full mt-1.5 mr-4 ${item.color}`} />
                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors">{item.company}</span>
                    <span className="text-base text-zinc-700 dark:text-zinc-400 text-sm">{item.date}</span>
                  </div>
                  <div className="italic text-base text-zinc-700 dark:text-zinc-400">{item.title}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        whileHover={{ scale: 1.02 }}

      >
        <h3 className="mb-5 text-lg font-bold ">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl p-4 transition-all duration-200 transform hover:scale-105 bg-transparent">
              <div className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </div>
              <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}