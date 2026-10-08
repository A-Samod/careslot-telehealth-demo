"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Video consult",
    price: 25,
    unit: "Per consultation",
    popular: true,
    features: [
      "Audio, video, and messaging",
      "e-Prescriptions when appropriate",
      "Secure patient portal",
      "Visit summary & history",
    ],
  },
  {
    name: "House call",
    price: 80,
    unit: "Per visit",
    popular: false,
    features: [
      "Licensed clinician",
      "At your preferred location",
      "On-site assessment",
      "Treatment & aftercare plan",
    ],
  },
  {
    name: "Clinic visit",
    price: 10,
    unit: "Booking fee",
    popular: false,
    features: [
      "In-person consultation",
      "Check-ups & follow-ups",
      "Partner clinic network",
      "Professional care environment",
    ],
  },
];

export function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="scroll-mt-24 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Simple sample rates
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Illustrative pricing for this portfolio demo — not billable on this site.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                className={`relative flex h-full flex-col rounded-2xl bg-white p-6 ring-1 transition ${
                  plan.popular
                    ? "ring-2 ring-teal shadow-xl shadow-teal/15"
                    : "ring-slate-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-4 top-4 rounded-md bg-teal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h3 className="pr-24 font-display text-xl text-ink">{plan.name}</h3>
                <p className="mt-4 font-display text-4xl text-ink">
                  <span className="text-xl align-top text-muted">$</span>
                  {plan.price}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  {plan.unit}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-600">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#faq"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-teal text-white hover:bg-teal-deep"
                      : "bg-mint text-teal-deep hover:bg-mint-strong/60"
                  }`}
                >
                  Book a visit
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
