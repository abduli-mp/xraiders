import { DiscordLink, WhatsAppLink } from "./Links";
const big =
  "group flex items-center justify-between border-b border-white/15 py-6 font-display text-4xl uppercase transition-colors hover:text-lime sm:text-6xl";
const arrow = (
  <span
    aria-hidden="true"
    className="transition-transform group-hover:translate-x-2"
  >
    →
  </span>
);
export default function Join() {
  return (
    <section
      id="join"
      aria-labelledby="join-h"
      className="mx-auto max-w-4xl px-5 py-24 sm:px-8"
    >
      <h2
        id="join-h"
        className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-lime"
      >
        join in on
      </h2>
      <DiscordLink className={big}>our Discord {arrow}</DiscordLink>
      <WhatsAppLink className={big}>
        our WhatsApp group {arrow}
      </WhatsAppLink>
    </section>
  );
}
