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
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[96px_1fr] sm:gap-3">
        <h3 className="text-lg font-semibold sm:pt-1">Timeline</h3>
        <div className="relative pl-6">
          <span
            className="absolute left-7 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-700"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {items.map((item, idx) => {
              const bulletColor = BULLET_COLORS[idx % BULLET_COLORS.length]
              return (
                <motion.a
                  key={`${item.company}-${item.title}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start no-underline"
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span
                    className={`${bulletColor} z-10 mr-4 mt-1.5 h-2 w-2 rounded-full ring-4 ring-zinc-900/10 dark:ring-zinc-100/10`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-400 dark:text-white dark:group-hover:text-blue-400">
                        {item.company}
                      </span>
                      <span className="text-sm text-zinc-700 dark:text-zinc-400">{item.date}</span>
                    </div>
                    <div className="text-sm italic text-zinc-700 dark:text-zinc-400">{item.title}</div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
