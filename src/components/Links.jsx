import { BsDiscord } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { SITE } from "../config/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };

export const DiscordLink = ({ className = "", children = <BsDiscord /> }) => (
  <a
    href={SITE.discordUrl}
    {...ext}
    className={className}
    aria-label="Discord Server"
  >
    {children}
  </a>
);

export const WhatsAppLink = ({
  className = "",
  children = <RiWhatsappFill />,
}) => (
  <a
    href={SITE.whatsappUrl}
    {...ext}
    className={className}
    aria-label="WhatsApp Group"
  >
    {children}
  </a>
);
