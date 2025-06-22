import React from 'react'
import type { Project } from '../../src/app/data'

type PreviewPos = {
  x: number
  y: number
}

type ProjectPreviewProps = {
  hoveredProject: string | null
  previewPos: PreviewPos
  projects: Project[]
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  hoveredProject,
  previewPos,
  projects,
}) => {
  if (!hoveredProject) return null
  const project = projects.find(p => p.name === hoveredProject)
  if (!project) return null

  return (
    <img
      src={project.image}
      alt="Project preview"
      className="absolute z-50 pointer-events-none rounded-xl shadow-lg"
      style={{
        top: previewPos.y + 16,
        left: previewPos.x + 16,
        width: 220,
        height: 'auto',
        transition: 'opacity 0.2s',
        maxWidth: '80%',
        maxHeight: '60%',
      }}
    />
  )
}

export default ProjectPreview