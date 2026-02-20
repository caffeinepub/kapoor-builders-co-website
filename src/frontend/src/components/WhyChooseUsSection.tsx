import { Award, Clock, DollarSign, Users, CheckCircle, MapPin } from 'lucide-react';

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Award,
      title: '24+ Years Experience',
      description: 'Proven track record of excellence in construction industry',
    },
    {
      icon: Clock,
      title: 'On-Time Project Delivery',
      description: 'Committed to meeting deadlines without compromising quality',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, honest pricing with no hidden costs or surprises',
    },
    {
      icon: Users,
      title: 'Skilled & Professional Team',
      description: 'Expert craftsmen and engineers dedicated to excellence',
    },
    {
      icon: CheckCircle,
      title: 'Quality Craftsmanship',
      description: 'Superior materials and meticulous attention to detail',
    },
    {
      icon: MapPin,
      title: 'Trusted Across Delhi NCR',
      description: 'Serving the region with integrity and reliability',
    },
  ];

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose <span className="text-gold">Kapoor Builders?</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Experience the difference of working with Delhi NCR's most trusted construction company
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
