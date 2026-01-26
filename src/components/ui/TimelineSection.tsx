import { motion, type Transition, type Variants } from 'motion/react'
import type { TimelineItem } from '@/data/site'
import { BULLET_COLORS } from '@/data/site'

type TimelineSectionProps = {
  items: TimelineItem[]
  variantsSection: Variants
  transitionSection: Transition
}

export default function TimelineSection({ items, variantsSection, transitionSection }: TimelineSectionProps) {
  return (
    <motion.section
      className="mb-16"
      variants={variantsSection}
      transition={transitionSection}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="mb-6 text-lg font-semibold">Timeline</h3>
      <div className="relative pl-8">
        <div className="space-y-10">
          {items.map((item, idx) => {
            const bulletColor = BULLET_COLORS[idx % BULLET_COLORS.length]
            return (
              <motion.a
                key={`${item.company}-${item.title}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start no-underline"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span
                  className={`${bulletColor} z-10 mr-4 mt-1.5 h-2 w-2 rounded-full`}
                  style={{ boxShadow: '0 0 0 4px rgba(0,0,0,0.08)' }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-400 dark:text-white dark:group-hover:text-blue-400">
                      {item.company}
                    </span>
                    <span className="text-sm text-zinc-700 dark:text-zinc-400">{item.date}</span>
                  </div>
                  <div className="text-base italic text-zinc-700 dark:text-zinc-400">{item.title}</div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}