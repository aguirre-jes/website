// JUG Panama — Shared Types and Navigation
// Events and sponsors content now comes from Markdown via lib/content.ts.

// ─── Types ────────────────────────────────────────────────────────────────────

export type EventStatus = 'upcoming' | 'past' | 'cancelled'
export type EventType = 'virtual' | 'presencial' | 'hibrido'
export type SponsorTier = 'gold' | 'silver' | 'bronze'
export type SponsorCategory = 'sponsor' | 'partner'

export interface Event {
  id: string
  title: string
  description: string
  date: string           // ISO string
  displayDate: string    // e.g. "MAR 28, 2026"
  type: EventType
  status: EventStatus
  speakerName: string
  speakerCompany: string
  time: string
  location: string
  tags: string[]
  registrationOpen?: boolean // controls whether registration actions are shown
  streamOpen?: boolean // controls whether YouTube live actions are shown
  lumaEventId?: string   // e.g. evt-JMflFSoDIHu4QhA
  lumaEmbedUrl?: string  // https://lu.ma/embed/event/{id}/simple
  youtubeLiveUrl?: string
  youtubeEmbedUrl?: string
  youtubeUrl?: string    // post-event recording
  thumbnailUrl?: string
}

export interface Sponsor {
  id: string
  name: string
  websiteUrl: string
  logoUrl: string
  category?: SponsorCategory
  tier: SponsorTier
  isActive: boolean
  sortOrder: number
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#comunidad', label: 'Comunidad' },
  { href: '/#eventos', label: 'Eventos' },
  { href: '/#sponsors', label: 'Sponsors' },
]

export const footerLinks = {
  navigation: [
    { href: '/#inicio', label: 'Inicio' },
    { href: '/#comunidad', label: 'Comunidad' },
    { href: '/#eventos', label: 'Eventos' },
    { href: '/#sponsors', label: 'Sponsors' },
  ],
  community: [
    { href: '/sobre-jug-panama', label: 'Sobre JUG Panama' },
    { href: '/conviertete-en-sponsor', label: 'Conviértete en sponsor' },
    { href: '/codigo-de-conducta', label: 'Código de conducta' },
    { href: '/contactanos', label: 'Contáctanos' },
  ],
}
