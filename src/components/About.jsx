export default function About() {
  return (
    <section aria-labelledby="about-h" className="bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <h2
          id="about-h"
          className="font-display text-5xl uppercase leading-[0.95] sm:text-7xl"
        >
          No
          <br />
          solo
          <br />
          <span className="text-lime">queue.</span>
        </h2>
        <div className="space-y-5 self-end text-lg text-fog/85 lg:ml-12">
          <p>
            XRAIDERS is for people who like more than one game. Whatever's on
            this week, there's usually someone looking to play.
          </p>
          <p className="text-mute">
            Come on Discord to chat and queue up, or use the WhatsApp group
            to join in.
          </p>
        </div>
      </div>
    </section>
  );
}
