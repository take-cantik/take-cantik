import Image from "next/image";
import { Social } from "~/pages/home/types";

type SocialCardProps = {
  social: Social;
};

export const SocialLink = ({ social }: SocialCardProps) => (
  <a
    href={social.profileUrl}
    target="_blank"
    className="w-full max-w-[140px] min-w-[100px] flex flex-col items-center pt-5 pb-3 gap-2 rounded-xl bg-white text-xs text-black-lighten-1 duration-300 hover:scale-105"
  >
    <Image src={social.iconPath} alt={social.name} width={40} height={40} />
    {social.domain}
  </a>
);