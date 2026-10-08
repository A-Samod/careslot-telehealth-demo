"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  {
    id: "video",
    label: "How it works",
    title: "Video consult",
    body: "Pick a time, join by video or audio, and speak with a licensed provider from anywhere.",
    image: "/how-1.jpg",
    alt: "Virtual consultation",
  },
  {
    id: "home",
    label: "Home visits",
    title: "House call",
    body: "A clinician comes to your home, hotel, or workplace when a video visit is not enough.",
    image: "/how-2.jpg",
    alt: "Care at home",
  },
  {
    id: "clinic",
    label: "Clinic care",
    title: "Clinic visit",
    body: "Reserve an in-person slot at a partner center for check-ups, follow-ups, or diagnostics.",
    image: "/how-3.jpg",
    alt: "Clinic visit",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="how" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">
            Introducing CareSlot
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            A clearer way to book care
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            A demo telehealth booking experience for virtual consultations, home
            visits, and in-clinic care — designed for speed and peace of mind.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-2">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    i === active
                      ? "bg-teal text-white shadow-md shadow-teal/20"
                      : "bg-mint text-teal-deep hover:bg-mint-strong/50"
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <h3 className="font-display text-2xl text-ink">{current.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{current.body}</p>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.12} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
