import { ComponentProps } from "react";

export const Container = ({ children }: ComponentProps<"div">) => (
  <div className="w-full max-w-5xl py-10 px-4 lg:px-8 mx-auto">{children}</div>
);
