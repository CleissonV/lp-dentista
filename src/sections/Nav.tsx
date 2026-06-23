import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScroll } from 'framer-motion'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Serviços', 'Equipe', 'Depoimentos', 'Contato']

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                <path d="M12 3c-3 0-4 1.5-4 4 0 3 1 4 1.5 7 .3 1.8.5 3 1.5 3s1-1.2 1.3-2.6c.15-.7.5-1 .7-1s.55.3.7 1c.3 1.4.3 2.6 1.3 2.6s1.2-1.2 1.5-3c.5-3 1.5-4 1.5-7 0-2.5-1-4-4-4-1 0-1.3.5-2 .5S13 3 12 3Z" />
              </svg>
            </div>
            <span className="font-serif text-[#0a1628] text-lg">
              Sorriso <span className="text-[#0077b6]">Perfeito</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-[#0077b6] transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              className="px-6 py-2.5 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#0077b6]">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-600 hover:text-[#0077b6] font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
