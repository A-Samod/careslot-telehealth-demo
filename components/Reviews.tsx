import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Aisha M.",
    quote:
      "Booked a video consult during a busy workday. Clear instructions, on-time doctor, and a prescription sent to my pharmacy within the hour.",
  },
  {
    name: "Daniel K.",
    quote:
      "Needed a house call while traveling. The clinician arrived prepared, explained everything calmly, and scheduled a follow-up the next morning.",
  },
  {
    name: "Priya S.",
    quote:
      "Clinic booking was simple. Fair pricing, friendly staff, and I left knowing exactly what to do for recovery.",
  },
  {
    name: "Marcus L.",
    quote:
      "Used CareSlot for a sports injury check. Fast slot, professional care, and easy follow-up messaging when I had questions.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              Reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              What people say
            </h2>
          </div>
          <a
            href="#pricing"
            className="inline-flex w-fit rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-deep"
          >
            Book a visit
          </a>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.06}>
              <blockquote>
                <p className="text-sm leading-relaxed text-muted">&ldquo;{review.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-ink">
                  {review.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
