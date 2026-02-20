import { Award, Users, Building2, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Award, value: '24+', label: 'Years Experience' },
    { icon: Building2, value: '100+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              About <span className="text-gold">Kapoor Builders & Co.</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-navy/5"
              >
                <stat.icon className="h-10 w-10 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-navy mb-1">{stat.value}</div>
                <div className="text-sm text-navy/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Company Description */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-navy/5">
            <div className="prose prose-lg max-w-none">
              <p className="text-navy/80 leading-relaxed mb-6">
                <span className="font-bold text-navy text-xl">KAPOOR BUILDERS & CO.</span> is a trusted
                construction company serving Delhi NCR with over 24 years of experience in residential and
                commercial projects. We specialize in end-to-end construction, collaborations, and interior
                solutions, delivering quality workmanship with a strong focus on timelines and client
                satisfaction.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                From new constructions to turnkey projects and interiors, our team combines technical expertise
                with practical design solutions. We also deal in real estate, offering complete support from
                development to delivery.
              </p>
              <p className="text-navy/80 leading-relaxed">
                Known for reliability, transparency, and long-term relationships, Kapoor Builders & Co. is
                committed to building spaces that last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
