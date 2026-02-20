import { useState } from 'react';

export function ProjectsGallery() {
  const projects = [
    {
      src: '/assets/generated/residential-construction.dim_800x600.png',
      alt: 'Luxury residential construction project in Delhi NCR by Kapoor Builders',
      category: 'Residential',
    },
    {
      src: '/assets/generated/commercial-building.dim_800x600.png',
      alt: 'Modern commercial building project in Delhi NCR',
      category: 'Commercial',
    },
    {
      src: '/assets/generated/builder-floor.dim_800x600.png',
      alt: 'Premium builder floor project with contemporary design',
      category: 'Builder Floor',
    },
    {
      src: '/assets/generated/luxury-interior-1.dim_800x600.png',
      alt: 'High-end interior design and execution by Kapoor Builders',
      category: 'Interior',
    },
    {
      src: '/assets/generated/luxury-interior-2.dim_800x600.png',
      alt: 'Premium living room interior with sophisticated styling',
      category: 'Interior',
    },
    {
      src: '/assets/generated/commercial-interior.dim_800x600.png',
      alt: 'Modern commercial interior design project',
      category: 'Commercial Interior',
    },
    {
      src: '/assets/generated/real-estate-development.dim_800x600.png',
      alt: 'Luxury apartment complex real estate development',
      category: 'Real Estate',
    },
    {
      src: '/assets/generated/construction-quality.dim_800x600.png',
      alt: 'Premium construction quality and craftsmanship',
      category: 'Construction',
    },
    {
      src: '/assets/generated/turnkey-project.dim_800x600.png',
      alt: 'Complete turnkey project with premium finishes',
      category: 'Turnkey',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Our <span className="text-gold">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Explore our portfolio of premium construction and interior projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-navy shadow-lg scale-105'
                    : 'bg-white text-navy/70 hover:bg-navy/5 border border-navy/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="inline-block px-4 py-1 bg-gold text-navy text-sm font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
