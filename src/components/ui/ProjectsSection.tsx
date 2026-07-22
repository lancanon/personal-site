import { useCallback, useRef, useState, type MouseEvent } from 'react'
import { motion, type Transition, type Variants } from 'motion/react'
import ProjectPreview from '@/components/ui/ProjectPreview'
import type { Project } from '@/data/site'

type ProjectsSectionProps = {
  projects: Project[]
  variantsSection: Variants
  transitionSection: Transition
}

export default function ProjectsSection({ projects, variantsSection, transitionSection }: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 })
  const listRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const listRect = listRef.current?.getBoundingClientRect()
    if (!listRect) return

    setPreviewPos({
      x: event.clientX - listRect.left,
      y: event.clientY - listRect.top,
    })
  }, [])

  return (
    <motion.section
      variants={variantsSection}
      transition={transitionSection}
      className="relative"
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[130px_1fr] sm:gap-4">
        <h3 className="text-lg font-semibold sm:pt-1">Projects</h3>
        <div ref={listRef} className="relative space-y-8">
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={handleMouseMove}
            >
              <div className="flex-1">
                <div className="font-semibold text-zinc-900 transition-colors dark:text-white group-hover:text-blue-400 dark:group-hover:text-blue-400">
                  {project.name}
                </div>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2 sm:w-48 sm:shrink-0 sm:justify-start">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`${tag.color} rounded-full px-2 py-1 text-xs font-medium text-white`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
          <ProjectPreview hoveredProject={hoveredProject} previewPos={previewPos} projects={projects} />
        </div>
      </div>
    </motion.section>
  )
}
