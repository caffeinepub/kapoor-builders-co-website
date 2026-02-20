import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitContactMessage } from '../hooks/useQueries';

export function ContactSection() {
  const submitContactMutation = useSubmitContactMessage();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) return;

    try {
      await submitContactMutation.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      });
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to submit contact message:', error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['9891117126', '9311737126'],
      links: ['tel:9891117126', 'tel:9311737126'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['D-37, Block D, Radheypuri, Krishna Nagar, Delhi, 110051'],
      links: [],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
      links: [],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In <span className="text-gold">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Kapoor Builders & Co.</h3>
                <p className="text-gold text-lg font-semibold mb-6">Owner: Sumit Kapoor</p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-white">
                        <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-gold" />
                        </div>
                        <span className="text-lg">{info.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pl-[72px]">
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {info.links[idx] ? (
                            <a
                              href={info.links[idx]}
                              className="text-white/80 hover:text-gold transition-colors duration-300 block"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p className="text-white/80">{detail}</p>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Google Maps */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0234567890123!2d77.2857784!3d28.6575323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbff6c1096b7%3A0xe67c5e2b649f225d!2sKapoor%20Builders%20%26%20Co.!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kapoor Builders & Co. Location - D-37, Block D, Radheypuri, Krishna Nagar, Delhi"
                  ></iframe>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-navy font-medium">
                        Your Name *
                      </Label>
                      <Input
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                        className="border-navy/20 focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone" className="text-navy font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        required
                        className="border-navy/20 focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="text-navy font-medium">
                        Your Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        className="border-navy/20 focus:border-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitContactMutation.isPending}
                      className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                    >
                      {submitContactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
