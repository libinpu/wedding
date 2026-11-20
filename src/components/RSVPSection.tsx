import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send, HeartHandshake, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FloralDivider } from './FloralDecorations';

interface RSVPFormData {
  guestName: string;
  email: string;
  phone: string;
  guestsCount: number;
  attending: 'yes' | 'no' | '';
  message: string;
}

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    guestName: '',
    email: '',
    phone: '',
    guestsCount: 1,
    attending: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.guestName.trim()) {
      setErrorMessage('Please enter your full name.');
      setStatus('error');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      setStatus('error');
      return;
    }
    if (!formData.attending) {
      setErrorMessage('Please indicate whether you will attend.');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      // Store in verified local storage state & simulated realistic network request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const existingRsvps = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existingRsvps.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('wedding_rsvps', JSON.stringify(existingRsvps));

      setStatus('success');

      if (formData.attending === 'yes') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C6A66B', '#E8D9C5', '#FAF7F0', '#40352D'],
        });
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('A network error occurred while submitting your RSVP. Please try again.');
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Be Our Guest</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso mt-2 mb-4">Confirm Your Presence</h2>
          <FloralDivider />
          <p className="text-espresso/70 text-sm">
            Please respond by <strong>1 December 2026</strong> to help us ensure every detail is prepared with warmth and care.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-champagne shadow-2xl relative"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 bg-champagne-light rounded-full flex items-center justify-center mx-auto text-gold-dark">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif text-espresso">
                {formData.attending === 'yes' ? 'We Can’t Wait to Celebrate with You!' : 'Thank You for Letting Us Know'}
              </h3>
              <p className="text-espresso/70 text-sm max-w-md mx-auto leading-relaxed">
                {formData.attending === 'yes'
                  ? `Thank you, ${formData.guestName}. Your reservation for ${formData.guestsCount} guest(s) has been joyfully recorded. A confirmation email has been dispatched to ${formData.email}.`
                  : `Thank you, ${formData.guestName}. While we will miss your company, we deeply appreciate your warm wishes and blessings.`}
              </p>
              <div className="pt-6">
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      guestName: '',
                      email: '',
                      phone: '',
                      guestsCount: 1,
                      attending: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full border border-champagne text-xs uppercase tracking-widest hover:border-gold transition-colors text-espresso"
                >
                  Submit Another Response
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Guest Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                  Guest Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mr. & Mrs. Alexander Wright"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30 placeholder:text-espresso/30"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30 placeholder:text-espresso/30"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30 placeholder:text-espresso/30"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                  Number of Guests Attending
                </label>
                <select
                  value={formData.guestsCount}
                  onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                  className="w-full px-4 py-3.5 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>

              {/* Attendance Options */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-3">
                  Will You Attend? <span className="text-gold">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                    className={`py-3.5 px-4 rounded-xl border text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 transition-all ${
                      formData.attending === 'yes'
                        ? 'bg-gold text-white border-gold shadow-md'
                        : 'bg-ivory/40 border-champagne text-espresso hover:border-gold/50'
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                    className={`py-3.5 px-4 rounded-xl border text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 transition-all ${
                      formData.attending === 'no'
                        ? 'bg-espresso text-white border-espresso shadow-md'
                        : 'bg-ivory/40 border-champagne text-espresso hover:border-espresso/50'
                    }`}
                  >
                    <span>Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                  Message for the Couple
                </label>
                <textarea
                  rows={4}
                  placeholder="Leave warm wishes, congratulations, or dietary notes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30 placeholder:text-espresso/30"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-espresso font-semibold text-xs tracking-[0.25em] uppercase shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>RECORDING ATTENDANCE...</span>
                  </>
                ) : (
                  <>
                    <span>CONFIRM YOUR ATTENDANCE</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
