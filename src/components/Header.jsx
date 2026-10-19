import { DiscordLink, WhatsAppLink } from "./Links";
const link =
  "text-xl sm:text-2xl font-semibold text-mute hover:text-lime transition-colors";
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="font-display text-2xl tracking-wider">
          X<span className="text-lime">/</span>RAIDERS
          <span className="sr-only"> — back to top</span>
        </a>
        <nav
          aria-label="Community links"
          className="flex items-center gap-4 sm:gap-8"
        >
          <DiscordLink className={link} />
          <WhatsAppLink className={link} />
        </nav>
      </div>
    </header>
  );
}
