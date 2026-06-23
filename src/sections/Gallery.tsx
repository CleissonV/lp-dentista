import SectionTitle from '../components/ui/SectionTitle'
import GalleryImage from '../components/ui/GalleryImage'
import { clinicImages } from '../constants/data'

export default function Gallery() {
  return (
    <section className="py-20 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Estrutura e Ambiente" subtitle="Nossa Clínica" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clinicImages.map((src, i) => (
            <GalleryImage key={i} src={src} alt="Clínica Sorriso Perfeito" index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
