import { useState, useEffect, useCallback } from 'react';
import { Phone, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero-plumber.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const slides = [
  {
    image: heroSlide1,
    headline: 'Professional Plumbing Services',
    subtitle: 'Trusted experts serving Namibia for over 30 years',
    cta: 'Get Started Today',
  },
  {
    image: heroSlide2,
    headline: '24/7 Emergency Repairs',
    subtitle: 'Fast response when you need us most — day or night',
    cta: 'Call Now',
  },
  {
    image: heroSlide3,
    headline: 'Quality Installations',
    subtitle: 'Modern solutions with SABS approved materials',
    cta: 'Book Service',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, currentSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12 absolute pointer-events-none'
                }`}
              >
                {/* Headline */}
                <h1
                  className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                >
                  {slide.headline}
                </h1>

                {/* Subtitle */}
                <p
                  className={`text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-xl transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                >
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <a href="tel:0812624341">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-6 text-lg rounded-full group"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      081 262 4341
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="#booking">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground font-heading font-semibold px-8 py-6 text-lg rounded-full"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      {slide.cta}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className="group relative h-3 transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-12 bg-primary'
                  : 'w-8 bg-white/40 group-hover:bg-white/60'
              }`}
            />
            {/* Progress bar for current slide */}
            {index === currentSlide && (
              <div
                className="absolute top-0 left-0 h-1 bg-secondary rounded-full animate-[progress_3s_linear]"
                style={{
                  animation: 'progress 3s linear',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 text-white/60 font-heading">
        <span className="text-2xl font-bold text-white">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="text-lg">/</span>
        <span className="text-lg">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
};

export default HeroSection;