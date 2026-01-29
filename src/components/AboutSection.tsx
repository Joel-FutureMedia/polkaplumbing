import { useEffect, useRef } from 'react';
import {
  Shield,
  Heart,
  Award,
  Users,
  Truck,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Professional',
    color: 'primary',
    points: [
      'High standard of workmanship',
      'Experienced seasoned professionals',
      'Security cleared servicemen with ID cards',
      'SABS approved materials only',
      'Member of Institute of Plumbing SA',
    ],
  },
  {
    icon: Shield,
    title: 'Dedicated',
    color: 'secondary',
    points: [
      'Free quotations on all work',
      'Maximum guarantee on all work',
      'Service in Windhoek, Swakopmund & Walvis Bay',
      'Affordable guaranteed service',
      'No "9-5" mentality - always available',
    ],
  },
  {
    icon: Heart,
    title: 'Caring',
    color: 'primary',
    points: [
      'Trustworthy after sales service',
      'No extra charge after hours',
      'Friendly customer support',
      'Fully insured against liability',
      'We clean up after each job',
    ],
  },
];

const stats = [
  { number: '30+', label: 'Years Experience' },
  { number: '1000+', label: 'Spare Parts in Stock' },
  { number: '24/7', label: 'Emergency Service' },
  { number: '100%', label: 'Satisfaction Guaranteed' },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <span className="inline-block bg-secondary/10 text-secondary font-heading font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Polka Plumbing</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            It's a truism that Polka Plumbing never sleeps. We're dedicated to providing
            exceptional service that exceeds customer expectations, 365 days a year.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="scroll-animate text-center p-6 bg-muted rounded-2xl hover-lift"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="scroll-animate bg-card border border-border rounded-2xl p-8 hover-lift"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    value.color === 'primary'
                      ? 'bg-gradient-primary'
                      : 'bg-gradient-secondary'
                  }`}
                >
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {value.title}
                </h3>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {value.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        value.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}
                    />
                    <span className="text-foreground/80 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="scroll-animate bg-polka-dark rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-background mb-4">
                Our Commitment to <span className="text-secondary">Excellence</span>
              </h3>
              <p className="text-background/70 mb-6">
                Our vans carry over 600 spare parts and our storeroom stocks more than
                1,000 spare parts, ensuring we can handle any plumbing challenge quickly
                and efficiently.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  { icon: Truck, text: 'Fully Equipped Vans' },
                  { icon: Users, text: 'Trained Staff' },
                  { icon: Clock, text: 'Quick Response' },
                  { icon: Shield, text: 'Quality Guaranteed' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-secondary" />
                    <span className="text-background/80 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl p-8 text-center">
                <div className="text-6xl md:text-7xl font-heading font-bold text-background mb-2">
                  24/7
                </div>
                <p className="text-secondary font-heading font-semibold text-lg">
                  Emergency Service
                </p>
                <p className="text-background/60 text-sm mt-2">
                  365 days a year, we're always here for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
