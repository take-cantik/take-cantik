import { ComponentProps } from "react";
import Image from "next/image";

export const Header = ({ children }: ComponentProps<"header">) => (
  <header className="w-full flex items-center gap-4 px-4 lg:px-8 py-3 text-lg lg:text-xl bg-gray-lighten-1">
    <Image
      src="/images/take-cantik.jpg"
      alt="take-cantik's icon"
      width={48}
      height={48}
      className="border border-solid border-black-lighten-1 rounded-3xl"
    />
    {children}
  </header>
);
