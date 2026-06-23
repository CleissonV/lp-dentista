import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { DentalService } from '../../types'

interface ServiceCardProps {
  service: DentalService
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-hover bg-white rounded-2xl p-8 border border-[#e1eeff] group cursor-default"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#0077b6]/10 to-[#00b4d8]/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-[#0077b6] group-hover:to-[#00b4d8] transition-all duration-300">
        <service.icon className="text-[#0077b6] group-hover:text-white transition-colors duration-300" size={22} />
      </div>
      <h3 className="font-serif text-xl text-[#0a1628] mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
      <div className="text-[#0077b6] font-semibold text-sm">{service.price}</div>
    </motion.div>
  )
}
