import type { Metadata } from 'next'
import { MeadowBreezeContent } from './MeadowBreezeContent'

export const metadata: Metadata = {
  title: 'The Meadow Breeze — Premium Farmland Estate',
  description:
    'The Meadow Breeze by Kresta — A distinguished 100-acre farmland estate nestled amidst the majestic Rachakonda Hills. 124 premium plots with 600-900 plants per plot.',
  openGraph: {
    title: 'The Meadow Breeze by Kresta — Premium Farmland Estate',
    description:
      'A distinguished 100-acre farmland estate nestled amidst the majestic Rachakonda Hills with 124 premium plots.',
  },
}

export default function MeadowBreezePage() {
  return <MeadowBreezeContent />
}
