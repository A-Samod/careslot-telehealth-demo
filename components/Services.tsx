import { Reveal } from "./Reveal";

function IconVideo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="5" width="14" height="14" rx="2" />
      <path d="M16 10l6-3v10l-6-3v-4z" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

function IconClinic() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 21V8l8-5 8 5v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 9v4M10 11h4" />
    </svg>
  );
}

const items = [
  {
    title: "Telehealth platform",
    body: "Connect with licensed providers from home or on the go — audio, video, messaging, and appointment management in one place.",
    icon: IconVideo,
  },
  {
    title: "House calls",
    body: "Request a clinician visit at home, work, or a hotel for on-site assessments and treatments when video is not enough.",
    icon: IconHome,
  },
  {
    title: "Clinic visits",
    body: "Reserve an in-person slot at a partner medical center for check-ups, follow-ups, or diagnostics that need facilities.",
    icon: IconClinic,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-mint/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">
            Services
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Care that fits how you live
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            One booking flow for virtual, home, and clinic care — without the clutter.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal shadow-sm ring-1 ring-teal/10">
                  <item.icon />
                </div>
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
