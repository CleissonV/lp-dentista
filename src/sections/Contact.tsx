import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { services } from '../constants/data'

const contactInfo = [
  { icon: FaPhone, text: '(11) 3456-7890' },
  { icon: FaWhatsapp, text: '(11) 99999-9999' },
  { icon: FaMapMarkerAlt, text: 'Vila Olímpia, SP' },
]

export default function Contact() {
  return (
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
            {contactInfo.map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                <c.icon className="text-[#0077b6]" size={14} />
                {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
