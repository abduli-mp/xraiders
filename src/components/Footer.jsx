import { DiscordLink, WhatsAppLink } from "./Links";
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-display text-fog">XRAIDERS</span>
          <br /> · Independent gaming community. Not affiliated with any game
          publisher.
        </p>
      </div>
    </footer>
  );
}
