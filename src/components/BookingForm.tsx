import { useState, useEffect, useRef } from 'react';
import { Calendar, User, Mail, Phone, MapPin, HelpCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const locations = [
  'Windhoek Central',
  'Windhoek West',
  'Windhoek East',
  'Windhoek North',
  'Kleine Kuppe',
  'Olympia',
  'Pioneers Park',
  'Khomasdal',
  'Katutura',
  'Eros',
  'Ludwigsdorf',
  'Hochland Park',
  'Swakopmund',
  'Walvis Bay',
  'Other',
];

const problems = [
  'Burst Pipe',
  'Blocked Drain',
  'Leaking Tap',
  'Toilet Issue',
  'Geyser Problem',
  'No Hot Water',
  'Water Pressure Issue',
  'Installation Required',
  'General Maintenance',
  'Emergency Repair',
  'Other',
];

const BookingForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaNumbers] = useState({
    a: Math.floor(Math.random() * 50) + 1,
    b: Math.floor(Math.random() * 50) + 1,
  });

  const [formData, setFormData] = useState({
    existingClient: '',
    date: '',
    name: '',
    idNumber: '',
    email: '',
    cell: '',
    address: '',
    location: '',
    problem: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate captcha
    const correctAnswer = captchaNumbers.a + captchaNumbers.b;
    if (parseInt(captchaAnswer) !== correctAnswer) {
      toast({
        title: 'Verification Failed',
        description: 'Please enter the correct answer to the math question.',
        variant: 'destructive',
      });
      return;
    }

    // Validate required fields
    if (!formData.existingClient || !formData.date || !formData.name || !formData.cell || !formData.location || !formData.problem) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Booking Request Sent!',
      description: 'We will contact you shortly to confirm your appointment.',
    });

    // Reset form
    setFormData({
      existingClient: '',
      date: '',
      name: '',
      idNumber: '',
      email: '',
      cell: '',
      address: '',
      location: '',
      problem: '',
    });
    setCaptchaAnswer('');
    setIsSubmitting(false);
  };

  return (
    <section id="booking" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Book Now
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Book a <span className="text-primary">Plumber</span>
            </h2>
            <p className="text-muted-foreground">
              Fill in the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="scroll-animate bg-card rounded-3xl shadow-lg p-8 md:p-10 border border-border"
          >
            {/* Existing Client */}
            <div className="mb-8">
              <Label className="text-foreground font-heading font-semibold mb-4 block">
                Existing Client?
              </Label>
              <RadioGroup
                value={formData.existingClient}
                onValueChange={(value) =>
                  setFormData({ ...formData, existingClient: value })
                }
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Date */}
            <div className="mb-6">
              <Label htmlFor="date" className="text-foreground font-heading font-semibold mb-2 block">
                When (Date) *
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="pl-11 h-12"
                  required
                />
              </div>
            </div>

            {/* Name & Surname */}
            <div className="mb-6">
              <Label htmlFor="name" className="text-foreground font-heading font-semibold mb-2 block">
                Name & Surname *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name and surname"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-11 h-12"
                  required
                />
              </div>
            </div>

            {/* ID Number */}
            <div className="mb-6">
              <Label htmlFor="idNumber" className="text-foreground font-heading font-semibold mb-2 block">
                ID Nr.
              </Label>
              <Input
                type="text"
                id="idNumber"
                placeholder="ID Nr."
                value={formData.idNumber}
                onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                className="h-12"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <Label htmlFor="email" className="text-foreground font-heading font-semibold mb-2 block">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-11 h-12"
                />
              </div>
            </div>

            {/* Cell */}
            <div className="mb-6">
              <Label htmlFor="cell" className="text-foreground font-heading font-semibold mb-2 block">
                Cell *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  id="cell"
                  placeholder="Your cellphone number"
                  value={formData.cell}
                  onChange={(e) => setFormData({ ...formData, cell: e.target.value })}
                  className="pl-11 h-12"
                  required
                />
              </div>
            </div>

            {/* Street Address */}
            <div className="mb-6">
              <Label htmlFor="address" className="text-foreground font-heading font-semibold mb-2 block">
                Street Address
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  id="address"
                  placeholder="Your street address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="pl-11 h-12"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <Label htmlFor="location" className="text-foreground font-heading font-semibold mb-2 block">
                Location *
              </Label>
              <Select
                value={formData.location}
                onValueChange={(value) => setFormData({ ...formData, location: value })}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Please select your area" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Problem */}
            <div className="mb-8">
              <Label htmlFor="problem" className="text-foreground font-heading font-semibold mb-2 block">
                Problem *
              </Label>
              <Select
                value={formData.problem}
                onValueChange={(value) => setFormData({ ...formData, problem: value })}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Please select your problem" />
                </SelectTrigger>
                <SelectContent>
                  {problems.map((prob) => (
                    <SelectItem key={prob} value={prob}>
                      {prob}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Captcha */}
            <div className="mb-8 p-4 bg-muted rounded-xl">
              <Label className="text-foreground font-heading font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary" />
                Are you human?
              </Label>
              <div className="flex items-center gap-4">
                <span className="text-lg font-heading font-bold text-foreground">
                  {captchaNumbers.a} + {captchaNumbers.b} = ?
                </span>
                <Input
                  type="number"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="w-24 h-10"
                  placeholder="?"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-primary hover:opacity-90 text-primary-foreground font-heading font-bold text-lg rounded-xl hover-scale disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Submit Booking Request
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
