// =============================================
// Contact.tsx — Contact form with EmailJS
// =============================================
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiPhone, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { personalInfo } from '../data';

// EmailJS credentials — set these in .env.local (never hardcode in source)
// See .env.local for setup instructions
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="mono-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            10. Contact
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
            Open to AI Engineer, ML Engineer, and Python Developer roles.
            Feel free to reach out — I'd love to chat!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {[
              { icon: <HiMail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <HiPhone size={20} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: <HiLocationMarker size={20} />, label: 'Location', value: personalInfo.location, href: null },
            ].map(item => (
              <div key={item.label} className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6366f1', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'white', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500 }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#6366f1')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'white')}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'white', fontSize: '0.88rem', fontWeight: 500 }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <div style={{ color: '#64748b', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                Social
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { href: personalInfo.github, icon: <FaGithub size={18} />, label: 'GitHub', id: 'contact-github-link' },
                  { href: personalInfo.linkedin, icon: <FaLinkedin size={18} />, label: 'LinkedIn', id: 'contact-linkedin-link' },
                ].map(social => (
                  <a key={social.label} href={social.href} id={social.id} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                      color: '#94a3b8', fontSize: '0.82rem', fontWeight: 500,
                      textDecoration: 'none', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8'; }}>
                    {social.icon}{social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card" style={{ padding: '1.25rem', borderColor: 'rgba(34,197,94,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#4ade80',
                  boxShadow: '0 0 8px #4ade80', display: 'inline-block', animation: 'availPulse 2s infinite',
                }} />
                <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.85rem' }}>Available for hire</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                Open to full-time, internship, and contract AI/ML roles. Typically responds within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Your Name
                </label>
                <input id="contact-name-input" type="text" name="name" required value={form.name}
                  onChange={handleChange} placeholder="John Doe" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Email Address
                </label>
                <input id="contact-email-input" type="email" name="email" required value={form.email}
                  onChange={handleChange} placeholder="john@company.com" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Subject
                </label>
                <input id="contact-subject-input" type="text" name="subject" required value={form.subject}
                  onChange={handleChange} placeholder="AI Engineer opportunity / Project collaboration" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Message
                </label>
                <textarea id="contact-message-input" name="message" required rows={5} value={form.message}
                  onChange={handleChange} placeholder="Hi Manish, I'd like to discuss..."
                  className="form-input" style={{ resize: 'vertical' }} />
              </div>

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.85rem', padding: '0.75rem', background: 'rgba(74,222,128,0.08)', borderRadius: 8 }}>
                  <HiCheckCircle size={18} /> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontSize: '0.85rem', padding: '0.75rem', background: 'rgba(248,113,113,0.08)', borderRadius: 8 }}>
                  <HiExclamationCircle size={18} /> Something went wrong. Please email me at {personalInfo.email}
                </div>
              )}

              <button id="contact-submit-btn" type="submit" disabled={status === 'sending'}
                className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>

              {EMAILJS_SERVICE_ID && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && (
                <p style={{ color: '#475569', fontSize: '0.72rem', textAlign: 'center' }}>
                  Messages will be delivered directly to my inbox.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes availPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </section>
  );
}
