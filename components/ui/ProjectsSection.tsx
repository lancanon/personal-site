import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectPreview from './ProjectPreview'
import type { Project } from '../../src/app/data'

type ProjectsSectionProps = {
  projects: Project[]
  variantsSection: any
  transitionSection: any
}

export default function ProjectsSection({
  projects,
  variantsSection,
  transitionSection,
}: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 })
  const gridRef = useRef<HTMLDivElement>(null)

  return (
    <motion.section
      variants={variantsSection}
      transition={transitionSection}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <h3 className="mb-6 text-lg font-semibold">Projects</h3>
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-4 transition-all duration-200 transform hover:scale-105 bg-transparent relative"
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
            onMouseMove={e => {
              if (!gridRef.current) return
              const gridRect = gridRef.current.getBoundingClientRect()
              setPreviewPos({
                x: e.clientX - gridRect.left,
                y: e.clientY - gridRect.top,
              })
            }}
          >
            <div className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </div>
            <p className="mt-1 text-base text-zinc-700 dark:text-zinc-400">
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
      <ProjectPreview
        hoveredProject={hoveredProject}
        previewPos={previewPos}
        projects={projects}
      />
    </motion.section>
  )
}