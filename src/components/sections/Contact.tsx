import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      console.log('Form submitted:', formData);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      value: 'idrissimou3ad@gmail.com',
      href: 'mailto:idrissimou3ad@gmail.com',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      value: '+34 643 753 339',
      href: 'tel:+34 643 753 339',
      gradient: 'from-purple-600 to-blue-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location'),
      value: 'Bilbao, Spain',
      gradient: 'from-red-600 to-pink-500'
    }
  ];

  return (
    <Section
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      className="bg-gradient-to-br from-gray-50 via-blue-50/10 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mb-8">
                {t('contact.info')}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className={`group transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {[
                    { name: 'name', type: 'text', label: t('contact.form.name') },
                    { name: 'email', type: 'email', label: t('contact.form.email') },
                    { name: 'subject', type: 'text', label: t('contact.form.subject') }
                  ].map((field, index) => (
                    <div 
                      key={field.name}
                      className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100 + 400}ms` }}
                    >
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>
                  ))}
                  
                  <div 
                    className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    style={{ transitionDelay: '700ms' }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 resize-none placeholder-gray-400 dark:placeholder-gray-500"
                    ></textarea>
                  </div>
                </div>
                
                <div 
                  className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className={`w-full group relative overflow-hidden hover:scale-105 transition-all duration-300 ${
                      submitStatus === 'success' ? 'bg-green-600 hover:bg-green-700' :
                      submitStatus === 'error' ? 'bg-red-600 hover:bg-red-700' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                      {isSubmitting ? t('contact.form.sending') :
                       submitStatus === 'success' ? t('contact.form.sent') :
                       submitStatus === 'error' ? t('contact.form.error') :
                       t('contact.form.send')}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;