import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import LiquidGlassButton from '../components/ui/LiquidGlassButton';
import { Check } from '@/components/ui/icons';

export default function Sponsors() {
  const tiers = [
    {
      name: 'Seed Partner',
      price: '$5,000',
      description: 'Support local hubs and student-led recycling drives.',
      features: [
        'Logo on Sponsors page',
        'Quarterly impact report',
        'Social media shoutout',
        'Access to partner toolkit'
      ]
    },
    {
      name: 'Growth Partner',
      price: '$15,000',
      description: 'Scale drop-off locations and community challenges.',
      featured: true,
      features: [
        'Everything in Seed',
        'Featured partner placement',
        'Dedicated impact dashboard',
        'Co-branded community event',
        'Annual partner spotlight'
      ]
    },
    {
      name: 'Legacy Partner',
      price: '$50,000+',
      description: 'Power global expansion and major sustainability initiatives.',
      features: [
        'Everything in Growth',
        'Custom partnership package',
        'Executive impact briefing',
        'Priority co-branding opportunities',
        'On-site activation support'
      ]
    }
  ];

  const partners = [
    { name: 'GreenTech Solutions', level: 'Legacy Partner', blurb: 'Building smarter recycling infrastructure.' },
    { name: 'EcoLogistics', level: 'Growth Partner', blurb: 'Moving materials efficiently across regions.' },
    { name: 'Campus Earth Coalition', level: 'Growth Partner', blurb: 'Student-led sustainability programs.' },
    { name: 'Circular Materials Co.', level: 'Seed Partner', blurb: 'Helping close the loop on plastics.' },
  ];

  return (
    <div
      className="min-h-screen bg-slate-950 text-white overflow-x-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(30, 58, 95, 0.3) 0%, rgba(10, 22, 40, 1) 50%, rgba(2, 6, 12, 1) 100%)'
      }}
    >
      <Navbar />

      <main className="pt-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-xl border border-white/10"
              style={{
                background:
                  'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400/90 text-sm font-medium">Partner With ReVive</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              <span className="text-white">Fuel a</span>{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #34D399 0%, #06B6D4 50%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Circular Economy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-lg text-white/60 leading-relaxed"
            >
              Sponsorship accelerates drop-off locations, community challenges, and verified impact tracking.
              Join partners building the next generation of recycling infrastructure.
            </motion.p>
          </div>

          {/* Tiers */}
          <section className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-3xl p-8 border border-white/10 backdrop-blur-2xl"
                  style={{
                    background: tier.featured
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 58, 95, 0.35) 0%, rgba(10, 22, 40, 0.55) 100%)'
                  }}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-100 border border-emerald-400/30"
                      style={{ background: 'rgba(16, 185, 129, 0.18)' }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <span className="text-2xl font-bold">{tier.price}</span>
                  </div>
                  <p className="mt-3 text-white/55">{tier.description}</p>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <LiquidGlassButton size="md" className="w-full">
                      Become a Partner
                    </LiquidGlassButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Partner grid */}
          <section className="mt-20">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Current Partners</h2>
                <p className="mt-2 text-white/55 max-w-2xl">
                  Organizations already helping expand ReVive’s recycling network.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="rounded-3xl p-6 border border-white/10 backdrop-blur-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.35) 0%, rgba(10, 22, 40, 0.55) 100%)'
                  }}
                >
                  <div className="text-sm text-emerald-300/90 font-medium">{p.level}</div>
                  <div className="mt-2 text-lg font-semibold">{p.name}</div>
                  <p className="mt-2 text-sm text-white/55">{p.blurb}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20">
            <div
              className="rounded-3xl border border-white/10 p-10 md:p-12 backdrop-blur-2xl text-center"
              style={{
                background:
                  'linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(96, 165, 250, 0.10) 100%)'
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold">Interested in a custom partnership package?</h3>
              <p className="mt-3 text-white/60 max-w-2xl mx-auto">
                We’ll tailor a sponsorship to your organization’s sustainability goals, reporting needs, and activation plans.
              </p>
              <div className="mt-8 flex justify-center">
                <LiquidGlassButton size="lg">Contact Us</LiquidGlassButton>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
