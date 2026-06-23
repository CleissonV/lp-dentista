import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import type { Testimonial } from '../../types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="card-hover bg-white rounded-2xl p-8 border border-[#e1eeff]"
    >
      <div className="flex gap-1 mb-4">
        {Array(testimonial.stars).fill(0).map((_, j) => (
          <FaStar key={j} className="text-yellow-400" size={14} />
        ))}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-full flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name[0]}
        </div>
        <div>
          <div className="font-semibold text-[#0a1628] text-sm">{testimonial.name}</div>
          <div className="text-[#00b4d8] text-xs">{testimonial.service}</div>
        </div>
      </div>
    </motion.div>
  )
}
