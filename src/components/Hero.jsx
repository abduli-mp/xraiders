import { useEffect, useRef } from "react";
import { DiscordLink, WhatsAppLink } from "./Links";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      if (document.visibilityState !== "visible") return;

      video.play().catch((error) => {
        console.warn("Background video autoplay failed:", error);
      });
    };

    attemptPlay();

    video.addEventListener("canplay", attemptPlay);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        attemptPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("canplay", attemptPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden border-b border-white/10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-full w-56 -skew-x-12 bg-lime sm:w-72 lg:right-[12%] lg:w-40"
      />

      {/* Background video */}
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/videos/gaming-montage-mobile.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/65"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-32 sm:px-8">
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
