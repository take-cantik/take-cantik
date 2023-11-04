import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeProps = ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps;

export const Code = ({ children, className, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <SyntaxHighlighter language={match[1]} styles={github}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
