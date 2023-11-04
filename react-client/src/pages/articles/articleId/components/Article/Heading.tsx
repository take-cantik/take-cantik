import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import { Link } from "react-router-dom";

type HeadingProps = {
  level: "1" | "2" | "3";
} & ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps;

export const Heading = ({ level, children }: HeadingProps) => {
  const title = children?.toString() as string;
  const CustomHeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Link to={`#${title}`}>
      <CustomHeadingTag id={title}>{children}</CustomHeadingTag>
    </Link>
  );
};
