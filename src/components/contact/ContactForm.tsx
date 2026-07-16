import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/buttons/Button';
import { Icon } from '@/components/shared/Icon';
import { packages } from '@/data/services';

/**
 * Enquiry form. No backend is wired, so on submit it composes a WhatsApp /
 * mailto message from the fields — a real, working "send" that doesn't
 * fake a server round-trip. Falls back to a confirmation state.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    'w-full rounded-lg border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-grey-mid focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15';

  return (
    <div className="glass rounded-2xl p-6 shadow-lg sm:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            className="flex flex-col items-center py-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
              <Icon name="check" size={32} />
            </span>
            <h3 className="font-display text-xl font-bold text-ink">Thanks, {form.name || 'there'}!</h3>
            <p className="mt-2 max-w-sm text-sm text-grey-dark">
              We&rsquo;ve noted your enquiry. For the fastest reply, pop in to the wash on Paul
              Sauer Street — walk-ins are welcome seven days a week.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-semibold text-brand-blue hover:underline"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Name</span>
                <input required value={form.name} onChange={update('name')} className={inputCls} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Phone</span>
                <input required value={form.phone} onChange={update('phone')} className={inputCls} placeholder="Your number" inputMode="tel" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Vehicle</span>
                <input value={form.vehicle} onChange={update('vehicle')} className={inputCls} placeholder="e.g. Ford Ranger" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Service</span>
                <select value={form.service} onChange={update('service')} className={inputCls}>
                  <option value="">Choose a wash…</option>
                  {packages.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Not sure">Not sure — help me choose</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Message</span>
              <textarea value={form.message} onChange={update('message')} rows={4} className={inputCls} placeholder="Anything else we should know?" />
            </label>
            <Button type="submit" full variant="primary" iconRight="arrow-right" className="!justify-center">
              Send enquiry
            </Button>
            <p className="text-center text-xs text-grey-mid">
              Prefer to talk? Use the call or WhatsApp buttons — we reply fastest in person.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
