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
  const gridRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const gridRect = gridRef.current?.getBoundingClientRect()
    if (!gridRect) return

    setPreviewPos({
      x: event.clientX - gridRect.left,
      y: event.clientY - gridRect.top,
    })
  }, [])

  return (
    <motion.section
      variants={variantsSection}
      transition={transitionSection}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <h3 className="mb-6 text-lg font-semibold">Projects</h3>
      <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block transform rounded-2xl bg-transparent p-4 transition-all duration-200 hover:scale-105"
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
            onMouseMove={handleMouseMove}
          >
            <div className="text-zinc-900 transition-colors dark:text-zinc-50 group-hover:text-blue-400 dark:group-hover:text-blue-400">
              {project.name}
            </div>
            <p className="mt-1 text-base text-zinc-700 dark:text-zinc-400">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`${tag.color} rounded-full px-2 py-1 text-xs font-medium text-white`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <ProjectPreview hoveredProject={hoveredProject} previewPos={previewPos} projects={projects} />
    </motion.section>
  )
}
