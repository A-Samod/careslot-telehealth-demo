"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(8,28,36,0.55)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,28,36,0.72)] via-[rgba(8,28,36,0.45)] to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo variant="light" className="mb-6 h-10 md:h-12" />
            <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
              Book care in minutes.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              CareSlot connects you with virtual visits, house calls, and clinic
              appointments — one clear booking flow whenever you need help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-teal/30 transition hover:bg-teal-deep"
              >
                Book a visit
              </a>
              <a
                href="#how"
                className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                How it works
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/careslot-phone-ui.png"
              alt="CareSlot app booking screen"
              width={340}
              height={662}
              priority
              className="w-[240px] drop-shadow-2xl sm:w-[280px] lg:w-[300px]"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
