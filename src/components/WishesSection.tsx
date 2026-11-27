import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, MessageSquareHeart, Sparkles, CheckCircle2, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FloralDivider } from './FloralDecorations';

interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
}

const STORAGE_KEY = 'shiljo_rosemariya_wishes_v3';

export const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      // Clear legacy/test entries
      localStorage.removeItem('shiljo_rosemariya_wishes');
      localStorage.removeItem('shiljo_rosemariya_wishes_v2');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: Wish[] = JSON.parse(saved);
        // Filter out any unwanted/test text like 'wgfrbdfrb'
        return parsed.filter(
          (w) =>
            !w.message.toLowerCase().includes('wgfrbdfrb') &&
            !w.name.toLowerCase().includes('wgfrbdfrb')
        );
      }
    } catch (e) {}
    return [];
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Friend');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (e) {}
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!message.trim()) {
      setError('Please enter your warm wishes.');
      return;
    }

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      relation,
      message: message.trim(),
      date: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setError('');
    setIsSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#C6A66B', '#E8D9C5', '#FAF7F0', '#40352D'],
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const handleDeleteWish = (id: string) => {
    setWishes(wishes.filter((w) => w.id !== id));
  };

  return (
    <section id="wishes" className="py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-gold font-medium mb-2">
            <MessageSquareHeart className="w-4 h-4" />
            <span>Guestbook & Blessings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso mt-1 mb-4">
            Wishes for the Couple
          </h2>
          <FloralDivider />
          <p className="text-espresso/70 text-sm max-w-md mx-auto">
            Leave your prayers, love, and heartiest congratulations for Shiljo & Rosemariya as they embark on their holy matrimony.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Wish Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-champagne shadow-xl relative"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <h3 className="text-xl font-serif text-espresso">Send Your Blessings</h3>
            </div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Thank you! Your heartfelt wish has been posted below.</span>
              </motion.div>
            )}

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                  Your Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Antony Kurian"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30 placeholder:text-espresso/30"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                  Relationship to Couple
                </label>
                <select
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30"
                >
                  <option value="Friend">Friend</option>
                  <option value="Family">Family / Relative</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Well-wisher">Well-wisher</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-espresso font-medium mb-2">
                  Your Wishes & Message <span className="text-gold">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your prayers, blessings, or loving message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors bg-ivory/30 placeholder:text-espresso/30"
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #B85D19 0%, #C96D29 50%, #8A3D0B 100%)',
                  color: '#FFFFFF',
                }}
                className="w-full py-4 px-6 rounded-full font-bold text-sm tracking-[0.2em] uppercase shadow-2xl hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-[#D4AF6A] cursor-pointer"
              >
                <span className="font-semibold text-white drop-shadow-md">SEND BLESSINGS</span>
                <Send className="w-4 h-4 ml-1.5 text-white drop-shadow-md" />
              </button>
            </form>
          </motion.div>

          {/* Wishes Feed Wall */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="flex items-center justify-between pb-2 border-b border-champagne">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-gold-dark">
                Shared Love ({wishes.length} {wishes.length === 1 ? 'Message' : 'Messages'})
              </span>
              <span className="text-xs text-espresso/50 flex items-center">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 mr-1" />
                Live Guestbook
              </span>
            </div>

            <div className="max-h-[580px] overflow-y-auto pr-2 space-y-4">
              {wishes.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl bg-white border border-dashed border-champagne text-espresso/60 space-y-2">
                  <Heart className="w-8 h-8 text-gold mx-auto opacity-70" />
                  <p className="font-serif text-base text-espresso">Be the first to wish the couple!</p>
                  <p className="text-xs text-espresso/50">Send your prayers and warm thoughts using the form.</p>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {wishes.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-2xl p-6 border border-champagne/80 shadow-sm hover:border-gold/60 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h4 className="font-serif text-lg text-espresso font-semibold">
                            {item.name}
                          </h4>
                          <span className="text-[11px] uppercase tracking-wider text-gold-dark bg-champagne-light/60 px-2 py-0.5 rounded-full inline-block mt-0.5">
                            {item.relation}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[11px] text-espresso/40 whitespace-nowrap">
                            {item.date}
                          </span>
                          <button
                            onClick={() => handleDeleteWish(item.id)}
                            title="Delete wish"
                            className="text-espresso/30 hover:text-red-500 p-1 rounded-full transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-sm font-cormorant italic text-espresso/85 leading-relaxed">
                        "{item.message}"
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
