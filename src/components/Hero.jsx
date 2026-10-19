import { DiscordLink, WhatsAppLink } from "./Links";
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden border-b border-white/10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-full w-56 -skew-x-12 bg-lime sm:w-72 lg:right-[12%] lg:w-40"
      />
      {/* Mixed gameplay background video */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/videos/gaming-montage.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/65"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-32 sm:px-8">
        {/* <p className="rise mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime">
          A gaming community
        </p> */}
        <h1 className="rise font-display text-[24vw] leading-[0.85] tracking-tight sm:text-[20vw] lg:text-[17rem]">
          XRAIDERS
        </h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <p
            className="rise font-display text-4xl uppercase leading-none sm:text-6xl"
            style={{ animationDelay: ".15s" }}
          >
            We Play
            <br />
            <span className="outline-text">Whatever.</span>
          </p>
          <div className="rise max-w-md" style={{ animationDelay: ".3s" }}>
            <p className="text-lg text-fog/90">
              We hop between games, but we always queue up together. Come find
              people to play with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
