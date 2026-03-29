import type { Metadata } from 'next'
import { ScheduleVisitContent } from './ScheduleVisitContent'

export const metadata: Metadata = {
  title: 'Schedule a Site Visit',
  description:
    'Schedule a free site visit to The Meadow Breeze — premium farmland estate by Kresta in Rachakonda Hills, Choutuppal.',
}

export default function ScheduleVisitPage() {
  return <ScheduleVisitContent />
}
