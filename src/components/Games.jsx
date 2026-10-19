import { GAMES } from "../data/games";
export default function Games() {
  return (
    <section
      aria-labelledby="games-h"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
    >
      <h2
        id="games-h"
        className="mb-10 text-sm font-semibold uppercase tracking-[0.25em] text-mute"
      >
        What we play
      </h2>
      <ul className="border-t border-white/10">
        {GAMES.map((g, i) => (
          <li
            key={g.name}
            className="group flex items-center gap-4 border-b border-white/10 py-5 transition-colors hover:bg-surface sm:gap-8 sm:px-4"
          >
            <span className="w-8 font-display text-lg text-mute group-hover:text-lime sm:w-12">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-4xl uppercase leading-none sm:text-6xl lg:text-7xl">
              {g.name}
            </span>
            <span className="ml-auto hidden text-sm text-mute sm:block">
              {g.note}
            </span>
            {g.image && (
              <img
                src={g.image}
                alt={`${g.name} artwork`}
                loading="lazy"
                width="160"
                height="90"
                className="hidden h-14 w-24 object-cover sm:block"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
