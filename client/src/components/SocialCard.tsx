import { Social } from "~/types";

type SocialCardProps = {
  social: Social;
};

export const SocialLink = ({ social }: SocialCardProps) => (
  <a
    href={social.profileUrl}
    target="_blank"
    className="w-full max-w-[140px] min-w-[100px] flex flex-col items-center pt-5 pb-3 gap-2 rounded-xl bg-white text-xs text-black-lighten-1 duration-300 hover:scale-105"
  >
    <img
      src={social.iconPath}
      alt={social.name}
      className="w-[40px] h-[40px]"
    />
    {social.domain}
  </a>
);
