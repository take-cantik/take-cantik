import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeProps = ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps;

export const Code = ({ children, className }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");

  return (
    <SyntaxHighlighter
      language={match ? match[1] : "txt"}
      styles={github}
      showLineNumbers
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};
