import SectionTitle from '../components/ui/SectionTitle'
import TeamCard from '../components/ui/TeamCard'
import { team, teamPhotos } from '../constants/data'

export default function Team() {
  return (
    <section id="equipe" className="py-32 bg-gradient-to-br from-[#0a1628] to-[#0f2545]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Equipe Médica" subtitle="Nossos Especialistas" dark />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} photo={teamPhotos[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
