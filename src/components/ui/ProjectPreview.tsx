import Image from 'next/image'
import { useMemo } from 'react'
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
  const projectLookup = useMemo(() => new Map(projects.map((project) => [project.name, project])), [projects])
  const project = hoveredProject ? projectLookup.get(hoveredProject) : null

  if (!project) return null

  return (
    <div
      className="pointer-events-none absolute z-50 rounded-xl shadow-lg"
      style={{
        top: previewPos.y + 16,
        left: previewPos.x + 16,
        width: 240,
        height: 160,
      }}
    >
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes="240px"
        className="h-full w-full rounded-xl border border-zinc-900/10 bg-zinc-50 object-cover dark:border-zinc-100/10 dark:bg-zinc-900"
        loading="lazy"
      />
    </div>
  )
}
