import { motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaStar,
  FaChevronDown,
  FaCheck,
  FaAward,
  FaUserMd,
} from 'react-icons/fa'
import { LuStar } from 'react-icons/lu'

const badges = [
  { icon: FaCheck, text: 'Sem Dor', pos: 'top-6 left-6', bg: '#0077b6' },
  { icon: FaAward, text: '12 Anos', pos: 'top-6 right-6', bg: '#00b4d8' },
  { icon: FaUserMd, text: '3 Especialistas', pos: 'bottom-6 right-6', bg: '#005e8b' },
]

const avatarColors = ['#0077b6', '#00b4d8', '#005e8b']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] blob bg-gradient-to-br from-[#00b4d8]/20 to-[#0077b6]/10" />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] blob bg-gradient-to-tr from-[#0077b6]/10 to-[#00b4d8]/5"
        style={{ animationDelay: '3s' }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-[#0077b6]/10 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse" />
            <span className="text-[#0077b6] text-xs font-medium tracking-wide">
              Clínica Odontológica · São Paulo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#0a1628] leading-none mb-6"
          >
            Seu Sorriso
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#00b4d8]">
              Perfeito
            </span>
            <br />
            Começa Aqui
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Odontologia de excelência com tecnologia de ponta. Transformamos sorrisos e vidas há
            mais de 12 anos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="pulse-btn px-8 py-4 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white font-medium rounded-full text-center hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
            >
              Agendar Consulta Grátis
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="px-8 py-4 border-2 border-[#0077b6] text-[#0077b6] font-medium rounded-full text-center hover:bg-[#0077b6] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={16} /> WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-6 mt-10"
          >
            <div className="flex -space-x-3">
              {avatarColors.map((c, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white"
                  style={{ backgroundColor: c }}
                >
                  <LuStar size={14} className="fill-white" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {Array(5).fill(0).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={12} />
                ))}
              </div>
              <p className="text-gray-400 text-xs">
                <strong className="text-[#0a1628]">4.9/5</strong> · +1.200 pacientes
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
              className="w-full h-[500px] object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0077b6]/30 to-transparent" />

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute bottom-6 left-6 bg-white rounded-xl p-3 shadow-xl flex items-center gap-3"
            >
              <LuStar className="text-[#f5b301] fill-[#f5b301]" size={22} />
              <div>
                <div className="font-bold text-sm text-gray-800">4.9/5</div>
                <div className="text-xs text-gray-500">+2.400 avaliações</div>
              </div>
            </motion.div>

            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                className={`absolute ${badge.pos} bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: badge.bg }}
                >
                  <badge.icon className="text-white" size={14} />
                </div>
                <span className="text-[#0a1628] text-sm font-semibold">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="text-[#0077b6] animate-bounce" size={18} />
      </motion.div>
    </section>
  )
}
