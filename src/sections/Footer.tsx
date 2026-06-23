import { FaTooth, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

const socialIcons = [FaWhatsapp, FaInstagram, FaFacebook]

export default function Footer() {
  return (
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
          {socialIcons.map((Icon, i) => (
            <a key={i} href="#" className="text-gray-600 hover:text-[#00b4d8] transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
