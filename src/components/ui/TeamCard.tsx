import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import type { TeamMember } from '../../types'

interface TeamCardProps {
  member: TeamMember
  index: number
  photo: string
}

export default function TeamCard({ member, index, photo }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="text-center"
    >
      <div
        className="w-48 h-48 mx-auto mb-6 rounded-full relative overflow-hidden"
        style={{ border: `3px solid ${member.color}60` }}
      >
        <img
          src={photo}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#00b4d8] rounded-full flex items-center justify-center">
          <FaCheck className="text-white" size={10} />
        </div>
      </div>
      <h3 className="font-serif text-xl text-white mb-1">{member.name}</h3>
      <p className="text-[#00b4d8] text-sm font-medium mb-1">{member.role}</p>
      <p className="text-gray-500 text-xs">{member.cro}</p>
    </motion.div>
  )
}
