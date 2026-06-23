import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface GalleryImageProps {
  src: string
  alt: string
  index: number
}

export default function GalleryImage({ src, alt, index }: GalleryImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl shadow-md group"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </motion.div>
  )
}
