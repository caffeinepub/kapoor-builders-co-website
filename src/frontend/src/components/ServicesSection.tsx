import { Home, Building2, Layers, Handshake, Package, PaintBucket, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Premium homes built with quality craftsmanship and attention to detail.',
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Modern commercial spaces designed for business success and growth.',
    },
    {
      icon: Layers,
      title: 'Builder Floor Projects',
      description: 'Exclusive builder floors with contemporary design and premium finishes.',
    },
    {
      icon: Handshake,
      title: 'Construction Collaboration',
      description: 'Strategic partnerships for large-scale development projects.',
    },
    {
      icon: Package,
      title: 'Turnkey Projects',
      description: 'Complete end-to-end solutions from concept to completion.',
    },
    {
      icon: PaintBucket,
      title: 'Interior Design & Execution',
      description: 'Luxurious interiors that blend aesthetics with functionality.',
    },
    {
      icon: MapPin,
      title: 'Real Estate Development',
      description: 'Prime properties with comprehensive development support.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-navy/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Our <span className="text-gold">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Comprehensive construction and interior solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-navy/10 bg-white overflow-hidden"
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl text-navy group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-navy/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
