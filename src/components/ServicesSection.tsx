import { useEffect, useRef } from 'react';
import { Wrench, Droplets, Shield, Clock, CheckCircle, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    description:
      'Fast, reliable service for urgent plumbing problems such as burst pipes, severe leaks, blocked drains, and overflowing toilets.',
    features: ['24/7 Availability', 'Quick Response', 'Damage Prevention'],
  },
  {
    icon: Settings,
    title: 'General Maintenance',
    description:
      'Routine inspection, servicing, and minor repairs of plumbing systems to ensure everything works properly.',
    features: ['Regular Inspections', 'System Optimization', 'Cost Savings'],
  },
  {
    icon: Shield,
    title: 'Preventative Maintenance',
    description:
      'Proactive checks and maintenance to identify and fix small plumbing issues early, avoiding major repairs.',
    features: ['Early Detection', 'Risk Reduction', 'Peace of Mind'],
  },
  {
    icon: Droplets,
    title: 'Leak Solutions',
    description:
      'Expert solutions for all types of leaks including hidden leaks, pipe damage, and water wastage issues.',
    features: ['Leak Detection', 'Pipe Repair', 'Water Conservation'],
  },
  {
    icon: CheckCircle,
    title: 'Installation & Repair',
    description:
      'Professional installation and repair for taps, toilets, basins, pipes, drains, and all plumbing fixtures.',
    features: ['SABS Approved', 'Quality Parts', 'Warranty Included'],
  },
  {
    icon: Clock,
    title: 'Blocked Drains',
    description:
      'Efficient clearing of blocked drains using professional equipment and techniques for lasting results.',
    features: ['High-Pressure Cleaning', 'Camera Inspection', 'Root Removal'],
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Plumbing Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to preventative maintenance, we provide comprehensive
            plumbing services with 30+ years of experience and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="scroll-animate hover-lift bg-card border-border/50 overflow-hidden group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-muted-foreground mb-4">
            Need a service not listed here? We handle all plumbing needs!
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:text-primary/80 transition-colors"
          >
            Get a Free Quote
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
