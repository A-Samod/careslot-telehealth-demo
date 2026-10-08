import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Logo variant="light" className="h-8" />
          <p className="mt-3 max-w-sm text-sm text-white/65">
            Portfolio demo · Not a real medical service.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/75">
          <a href="#how" className="hover:text-white">
            How it works
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a href="mailto:hello@careslot.demo" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
