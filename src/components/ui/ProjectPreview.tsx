import Image from 'next/image'
import type { Project } from '@/data/site'

type PreviewPos = {
  x: number
  y: number
}

type ProjectPreviewProps = {
  hoveredProject: string | null
  previewPos: PreviewPos
  projects: Project[]
}

export default function ProjectPreview({ hoveredProject, previewPos, projects }: ProjectPreviewProps) {
  return (
    <div
      className="pointer-events-none absolute z-50 rounded-xl shadow-lg"
      style={{
        top: previewPos.y + 16,
        left: previewPos.x + 16,
        width: 240,
        height: 160,
        opacity: hoveredProject ? 1 : 0,
        transition: 'opacity 0.15s ease',
      }}
    >
      {projects.map((project) => (
        <Image
          key={project.name}
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(min-width: 640px) 280px, 240px"
          quality={95}
          loading="eager"
          className="rounded-xl border border-zinc-900/10 bg-zinc-50 object-cover dark:border-zinc-100/10 dark:bg-zinc-900"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: hoveredProject === project.name ? 1 : 0,
          }}
        />
      ))}
    </div>
  )
}
