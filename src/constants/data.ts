import {
  FaSmile,
  FaTooth,
  FaAward,
  FaUserMd,
} from 'react-icons/fa'
import { MdHealthAndSafety, MdCleanHands } from 'react-icons/md'
import type { DentalService, TeamMember, Testimonial } from '../types'

export const services: DentalService[] = [
  {
    icon: FaSmile,
    title: 'Clareamento Dental',
    desc: 'Resultados visíveis em 1 sessão. Técnica a laser com protocolo exclusivo para sorriso até 8 tons mais branco.',
    price: 'A partir de R$ 800',
  },
  {
    icon: FaTooth,
    title: 'Implante Dentário',
    desc: 'Implantes de titânio de última geração. Aparência natural, durabilidade vitalícia e conforto total.',
    price: 'A partir de R$ 2.200',
  },
  {
    icon: MdHealthAndSafety,
    title: 'Ortodontia',
    desc: 'Aparelho fixo, móvel e alinhadores invisíveis. Sorriso alinhado de forma discreta e confortável.',
    price: 'A partir de R$ 180/mês',
  },
  {
    icon: MdCleanHands,
    title: 'Limpeza Profissional',
    desc: 'Remoção de tártaro e biofilme dental. Profilaxia completa para saúde bucal duradoura.',
    price: 'A partir de R$ 150',
  },
  {
    icon: FaAward,
    title: 'Facetas de Porcelana',
    desc: 'Facetas ultra-finas personalizadas. Transforme seu sorriso com estética natural de alta precisão.',
    price: 'A partir de R$ 1.800/dente',
  },
  {
    icon: FaUserMd,
    title: 'Endodontia',
    desc: 'Tratamento de canal moderno e indolor. Salve seu dente natural com máxima eficiência.',
    price: 'A partir de R$ 650',
  },
]

export const team: TeamMember[] = [
  { name: 'Dra. Ana Beatriz Costa', role: 'Clínica Geral & Estética', cro: 'CRO-SP 45.231', color: '#0077b6' },
  { name: 'Dr. Paulo Henrique Melo', role: 'Implantodontia', cro: 'CRO-SP 38.102', color: '#00b4d8' },
  { name: 'Dra. Fernanda Torres', role: 'Ortodontia', cro: 'CRO-SP 52.789', color: '#0077b6' },
]

export const teamPhotos: string[] = [
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop',
]

export const clinicImages: string[] = [
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=600&q=80&auto=format&fit=crop',
]

export const testimonials: Testimonial[] = [
  {
    name: 'Mariana Souza',
    text: 'Fiz o clareamento e ficou incrível! Equipe super atenciosa e ambiente aconchegante. Já indiquei pra toda minha família.',
    stars: 5,
    service: 'Clareamento Laser',
  },
  {
    name: 'Gabriel Santos',
    text: 'Tinha muito medo de dentista, mas o Dr. Paulo me deixou completamente tranquilo. Implante feito sem dor nenhuma!',
    stars: 5,
    service: 'Implante Dentário',
  },
  {
    name: 'Lucia Ferreira',
    text: 'As facetas de porcelana transformaram meu sorriso completamente. Resultado natural e perfeito. Recomendo demais!',
    stars: 5,
    service: 'Facetas Porcelana',
  },
]
