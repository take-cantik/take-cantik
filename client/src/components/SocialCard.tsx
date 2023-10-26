import { Social } from "../types";

type SocialCardProps = {
  social: Social;
};

export const SocialLink = ({ social }: SocialCardProps) => (
  <a
    href={social.profileUrl}
    target="_blank"
    className="w-full max-w-[120px] min-w-[100px] flex flex-col items-center py-3 gap-2 rounded-xl bg-white text-xs duration-300 hover:scale-105"
  >
    <img
      src={social.iconPath}
      alt={social.name}
      className="w-[48px] h-[48px] rounded-lg"
    />
    {social.domain}
  </a>
);
