import SectionTitle from '../components/ui/SectionTitle'
import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../constants/data'

export default function Services() {
  return (
    <section id="serviços" className="py-32 max-w-7xl mx-auto px-6">
      <SectionTitle title="Tratamentos Especializados" subtitle="O Que Oferecemos" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
