import type { IconType } from 'react-icons'

export interface DentalService {
  icon: IconType
  title: string
  desc: string
  price: string
}

export interface TeamMember {
  name: string
  role: string
  cro: string
  color: string
}

export interface Testimonial {
  name: string
  stars: number
  text: string
  service: string
}

export interface GalleryImage {
  src: string
  alt: string
}
