import React, { useState, useEffect, useRef } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, AlertCircle, CheckCircle, Terminal, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
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
    setStatusMessage('');

    const serviceId = 'service_dkfihg6';
    const templateId = 'template_n9fk2lp';
    const publicKey = 'Mmt9mocsntCTZeTMT'; 

    try {
      if (!formRef.current) {
        throw new Error('Form reference is not available');
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setStatusMessage(t('contact.form.success') || 'Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setStatusMessage(t('contact.form.error') || 'Failed to send message. Please try again.');
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
      icon: <Mail className="w-5 h-5" />,
      title: t('contact.email'),
      value: 'idrissimou3ad@gmail.com',
      href: 'mailto:idrissimou3ad@gmail.com',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: t('contact.linkedin'),
      value: 'mouad-idrissi',
      href: 'https://www.linkedin.com/in/mouad-idrissi/',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: t('contact.phone'),
      value: '+34 643 753 339',
      href: 'tel:+34643753339',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t('contact.location'),
      value: 'Bilbao, Spain',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <Section
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      className="bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information - Terminal Style */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            {/* Terminal Window */}
            <div className="bg-slate-100/80 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/20 overflow-hidden transition-all duration-300">
              {/* Terminal Header */}
              <div className="bg-slate-200/50 dark:bg-black/50 px-4 py-2 flex items-center gap-2 border-b border-cyan-500/20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <Terminal className="w-3 h-3 text-cyan-500 dark:text-cyan-400 ml-1" />
                <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400">contact.info</span>
              </div>

              {/* Terminal Content */}
              <div className="p-7 space-y-6 font-mono text-sm">
                {/* Description */}
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-gray-400">
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">message</span>{' '}
                    <span className="text-cyan-600 dark:text-cyan-400">=</span>{' '}
                    <span className="text-green-600 dark:text-green-400">"{t('contact.description')}"</span>
                  </p>
                  <p className="text-slate-600 dark:text-gray-400">
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">status</span>{' '}
                    <span className="text-cyan-600 dark:text-cyan-400">=</span>{' '}
                    <span className="text-green-600 dark:text-green-400">"{t('contact.available')}"</span>
                  </p>
                </div>

                {/* Contact Info Items */}
                <div className="space-y-3 pt-4 border-t border-cyan-500/20">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={info.title}
                      className={`group transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    >
                      <div className={`flex items-start gap-3 p-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border ${info.borderColor} hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300`}>
                        <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/50 ${info.color} border ${info.borderColor}`}>
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-500 dark:text-gray-400 mb-1">
                            <span className="text-cyan-600 dark:text-cyan-400">//</span> {info.title}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`text-sm ${info.color} hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300 break-all`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className={`text-sm ${info.color} break-all`}>
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
          </div>

          {/* Contact Form - Code Editor Style */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
          >
            <div className="bg-slate-100/80 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/20 overflow-hidden transition-all duration-300">
              {/* Editor Header */}
              <div className="bg-slate-200/50 dark:bg-black/50 px-4 py-2 flex items-center gap-2 border-b border-cyan-500/20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <Code2 className="w-3 h-3 text-cyan-500 dark:text-cyan-400 ml-1" />
                <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400">sendMessage.tsx</span>
              </div>

              {/* Form Content */}
              <div className="p-7">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Status Message */}
                  {submitStatus !== 'idle' && statusMessage && (
                    <div 
                      className={`p-4 rounded-lg flex items-center gap-3 font-mono text-sm border ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400'
                          : 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      )}
                      <span>{statusMessage}</span>
                    </div>
                  )}
                  
                  {/* Form Fields */}
                  <div className="space-y-4">
                    {[
                      { name: 'name', type: 'text', label: t('contact.form.name'), placeholder: 'John Doe' },
                      { name: 'email', type: 'email', label: t('contact.form.email'), placeholder: 'john@example.com' },
                      { name: 'subject', type: 'text', label: t('contact.form.subject'), placeholder: 'Project Inquiry' }
                    ].map((field, index) => (
                      <div 
                        key={field.name}
                        className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: `${index * 100 + 400}ms` }}
                      >
                        <label
                          htmlFor={field.name}
                          className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-2"
                        >
                          <span className="text-cyan-600 dark:text-cyan-400">//</span> {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-cyan-500/30 rounded-lg 
                            focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                            text-slate-900 dark:text-cyan-100 font-mono text-sm
                            transition-all duration-300 
                            hover:border-cyan-500 dark:hover:border-cyan-400
                            placeholder-slate-400 dark:placeholder-gray-600"
                        />
                      </div>
                    ))}
                    
                    <div 
                      className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                      style={{ transitionDelay: '700ms' }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400">//</span> {t('contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-cyan-500/30 rounded-lg 
                          focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 
                          text-slate-900 dark:text-cyan-100 font-mono text-sm
                          transition-all duration-300 
                          hover:border-cyan-500 dark:hover:border-cyan-400
                          resize-none placeholder-slate-400 dark:placeholder-gray-600"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div 
                    className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className={`w-full group relative overflow-hidden font-mono
                        bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400
                        border-0 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50
                        transition-all duration-300 ${
                        submitStatus === 'success' ? '!bg-gradient-to-r !from-green-500 !to-green-600' :
                        submitStatus === 'error' ? '!bg-gradient-to-r !from-red-500 !to-red-600' : ''
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
      </div>
    </Section>
  );
};

export default Contact;