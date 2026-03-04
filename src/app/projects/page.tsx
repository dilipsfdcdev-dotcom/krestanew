import type { Metadata } from 'next'
import { ProjectsPageContent } from './ProjectsPageContent'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore premium real estate developments by Kresta Infra & Developers — luxury farmland estates, residential projects, and integrated townships.',
}

export default function ProjectsPage() {
  return <ProjectsPageContent />
}
