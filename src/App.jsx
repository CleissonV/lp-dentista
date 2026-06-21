import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  FaTooth,
  FaSmile,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaCheck,
  FaCalendarAlt,
  FaUserMd,
  FaAward,
} from 'react-icons/fa'
import { MdHealthAndSafety, MdCleanHands } from 'react-icons/md'

const services = [
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

const team = [
  { name: 'Dra. Ana Beatriz Costa', role: 'Clínica Geral & Estética', cro: 'CRO-SP 45.231', color: '#0077b6' },
  { name: 'Dr. Paulo Henrique Melo', role: 'Implantodontia', cro: 'CRO-SP 38.102', color: '#00b4d8' },
  { name: 'Dra. Fernanda Torres', role: 'Ortodontia', cro: 'CRO-SP 52.789', color: '#0077b6' },
]

const teamPhotos = [
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop',
]

const clinicImages = [
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=600&q=80&auto=format&fit=crop',
]

const testimonials = [
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

const GalleryImage = ({ src, index }) => {
  const ref = useRef(null)
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
        alt="Clínica Sorriso Perfeito"
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </motion.div>
  )
}

const SectionTitle = ({ children, subtitle, dark }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className={`tracking-[0.3em] uppercase text-xs mb-3 font-medium ${
          dark ? 'text-[#00b4d8]' : 'text-[#0077b6]'
        }`}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15 }}
        className={`font-serif text-4xl md:text-5xl mb-4 ${dark ? 'text-white' : 'text-[#0a1628]'}`}
      >
        {children}
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

const ServiceCard = ({ s, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="card-hover bg-white rounded-2xl p-8 border border-[#e1eeff] group cursor-default"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#0077b6]/10 to-[#00b4d8]/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-[#0077b6] group-hover:to-[#00b4d8] transition-all duration-300">
        <s.icon className="text-[#0077b6] group-hover:text-white transition-colors duration-300" size={22} />
      </div>
      <h3 className="font-serif text-xl text-[#0a1628] mb-2">{s.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
      <div className="text-[#0077b6] font-semibold text-sm">{s.price}</div>
    </motion.div>
  )
}

const TeamCard = ({ member, i, photo }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.2 }}
      className="text-center"
    >
      <div className="w-48 h-48 mx-auto mb-6 rounded-full relative overflow-hidden"
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

const TestimonialCard = ({ t, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.2 }}
      className="card-hover bg-white rounded-2xl p-8 border border-[#e1eeff]"
    >
      <div className="flex gap-1 mb-4">
        {Array(t.stars).fill(0).map((_, j) => (
          <FaStar key={j} className="text-yellow-400" size={14} />
        ))}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-full flex items-center justify-center text-white font-bold text-sm">
          {t.name[0]}
        </div>
        <div>
          <div className="font-semibold text-[#0a1628] text-sm">{t.name}</div>
          <div className="text-[#00b4d8] text-xs">{t.service}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Nav */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-full flex items-center justify-center">
              <FaTooth className="text-white" size={14} />
            </div>
            <span className="font-serif text-[#0a1628] text-lg">
              Sorriso <span className="text-[#0077b6]">Perfeito</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Serviços', 'Equipe', 'Depoimentos', 'Contato'].map(item => (
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
                {['Serviços', 'Equipe', 'Depoimentos', 'Contato'].map(item => (
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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] blob bg-gradient-to-br from-[#00b4d8]/20 to-[#0077b6]/10" />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] blob bg-gradient-to-tr from-[#0077b6]/10 to-[#00b4d8]/5"
          style={{ animationDelay: '3s' }}
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
                {['#0077b6', '#00b4d8', '#005e8b'].map((c, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: c }}
                  >
                    ★
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={12} />
                    ))}
                </div>
                <p className="text-gray-400 text-xs">
                  <strong className="text-[#0a1628]">4.9/5</strong> · +1.200 pacientes
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
                alt="clínica dental"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077b6]/30 to-transparent" />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute bottom-6 left-6 bg-white rounded-xl p-3 shadow-xl flex items-center gap-3"
              >
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="font-bold text-sm text-gray-800">4.9/5</div>
                  <div className="text-xs text-gray-500">+2.400 avaliações</div>
                </div>
              </motion.div>
              {[
                { icon: FaCheck, text: 'Sem Dor', pos: 'top-6 left-6', bg: '#0077b6' },
                { icon: FaAward, text: '12 Anos', pos: 'top-6 right-6', bg: '#00b4d8' },
                { icon: FaUserMd, text: '3 Especialistas', pos: 'bottom-6 right-6', bg: '#005e8b' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className={`absolute ${item.pos} bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.bg }}
                  >
                    <item.icon className="text-white" size={14} />
                  </div>
                  <span className="text-[#0a1628] text-sm font-semibold">{item.text}</span>
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

      {/* Services */}
      <section id="serviços" className="py-32 max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="O Que Oferecemos">Tratamentos Especializados</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Nossa Clínica">Estrutura e Ambiente</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clinicImages.map((src, index) => (
              <GalleryImage key={index} src={src} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-32 bg-gradient-to-br from-[#0a1628] to-[#0f2545]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Nossos Especialistas" dark>
            Equipe Médica
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamCard key={i} member={member} i={i} photo={teamPhotos[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-32 max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Depoimentos">Pacientes Felizes</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 bg-gradient-to-br from-[#0077b6] to-[#00b4d8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            Agende Sua Consulta
          </motion.h2>
          <p className="text-blue-100 text-lg mb-10">Primeira consulta gratuita. Sem compromisso.</p>
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border border-[#e1eeff] rounded-xl px-4 py-3.5 text-[#0a1628] text-sm focus:border-[#0077b6] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="w-full border border-[#e1eeff] rounded-xl px-4 py-3.5 text-[#0a1628] text-sm focus:border-[#0077b6] focus:outline-none transition-colors"
                />
              </div>
              <select className="w-full border border-[#e1eeff] rounded-xl px-4 py-3.5 text-gray-500 text-sm focus:border-[#0077b6] focus:outline-none transition-colors">
                <option value="">Selecione o tratamento</option>
                {services.map(s => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white font-medium rounded-xl text-sm hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaCalendarAlt size={14} /> Confirmar Agendamento
              </button>
            </form>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 pt-6 border-t border-[#e1eeff]">
              {[
                { icon: FaPhone, text: '(11) 3456-7890' },
                { icon: FaWhatsapp, text: '(11) 99999-9999' },
                { icon: FaMapMarkerAlt, text: 'Vila Olímpia, SP' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                  <c.icon className="text-[#0077b6]" size={14} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-full flex items-center justify-center">
              <FaTooth className="text-white" size={10} />
            </div>
            <span className="font-serif text-white">Sorriso Perfeito</span>
          </div>
          <p className="text-gray-600 text-xs">
            © 2024 Sorriso Perfeito Clínica Odontológica. CRO-SP 45.231.
          </p>
          <div className="flex gap-4">
            {[FaWhatsapp, FaInstagram, FaFacebook].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-600 hover:text-[#00b4d8] transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
