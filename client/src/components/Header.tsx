import { ComponentProps } from "react";

export const Header = ({ children }: ComponentProps<"header">) => {
  return (
    <header className="w-full flex items-center gap-4 px-4 lg:px-8 py-3 bg-gray-lighten-1">
      <img
        src="/images/take-cantik.jpg"
        alt="take-cantik's icon"
        className="w-12 h-12 border border-solid border-black-lighten-1 rounded-3xl"
      />
      {children}
    </header>
  );
};
