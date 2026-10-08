"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How do virtual consultations work?",
    a: "Pick a time, join by video or audio from your phone or laptop, and speak with a licensed provider. You receive guidance and a visit summary after the session.",
  },
  {
    q: "Can I get a prescription through CareSlot?",
    a: "When clinically appropriate, providers may issue e-prescriptions that can be sent to a partner pharmacy. This demo site does not process real prescriptions.",
  },
  {
    q: "Is my personal health data secure?",
    a: "A production CareSlot build would use encrypted transport and healthcare-aligned privacy practices. This portfolio page is a front-end demo only and does not store medical data.",
  },
  {
    q: "Do you offer house-call services?",
    a: "Yes — the product concept includes house calls from certified clinicians at your preferred location, subject to local availability.",
  },
  {
    q: "What are the payment options?",
    a: "Credit and debit cards are the planned payment methods for a live deployment. Pricing shown here is sample content for demonstration.",
  },
  {
    q: "Terms & conditions (demo)",
    a: "This is a fictional portfolio demo and not a real medical service. Virtual care never replaces emergency services. Sample fees are illustrative and not billable here.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  }

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Ready to book care?
          </h2>
          <p className="mt-4 text-muted">
            Join the demo waitlist or explore how CareSlot works below.
          </p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-teal focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep"
            >
              Notify me
            </button>
          </form>
          {sent && (
            <p className="mt-3 text-sm font-medium text-teal">
              Thanks — you&apos;re on the demo waitlist.
            </p>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-display text-2xl text-ink">
            Frequently asked questions
          </h3>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-ink"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.q}
                    <span className="text-teal text-lg leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
