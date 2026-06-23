import SectionTitle from '../components/ui/SectionTitle'
import TestimonialCard from '../components/ui/TestimonialCard'
import { testimonials } from '../constants/data'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 max-w-7xl mx-auto px-6">
      <SectionTitle title="Pacientes Felizes" subtitle="Depoimentos" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} index={i} />
        ))}
      </div>
    </section>
  )
}
