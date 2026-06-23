import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  dark?: boolean
}

export default function SectionTitle({ title, subtitle, dark = false }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="text-center mb-16">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className={`tracking-[0.3em] uppercase text-xs mb-3 font-medium ${
            dark ? 'text-[#00b4d8]' : 'text-[#0077b6]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15 }}
        className={`font-serif text-4xl md:text-5xl mb-4 ${dark ? 'text-white' : 'text-[#0a1628]'}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="w-16 h-0.5 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] mx-auto"
      />
    </div>
  )
}
