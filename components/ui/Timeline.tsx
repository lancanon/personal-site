import { motion } from 'framer-motion'
import type { TimelineItem } from '../../src/app/data'
import { BULLET_COLORS } from '../../src/app/data'

type TimelineProps = {
  items: TimelineItem[]
  variantsSection: any
  transitionSection: any
}

export default function Timeline({ items, variantsSection, transitionSection }: TimelineProps) {
  return (
    <motion.section
      className="mb-16"
      variants={variantsSection}
      transition={transitionSection}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="mb-6 text-lg font-semibold">Timeline</h3>
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-zinc-450" />
        <div className="space-y-10">
          {items.map((item, idx) => (
            <motion.a
              key={item.company + item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start group no-underline"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Colored bullet by index */}
              <span className={`w-3 h-3 rounded-full mt-1.5 mr-4 ${BULLET_COLORS[idx % BULLET_COLORS.length]}`} />
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
  )
}