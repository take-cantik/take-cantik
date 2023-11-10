import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeProps = Omit<
  SyntaxHighlighterProps &
    ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    ExtraProps,
  "styles"
>;

export const Code = ({ inline, children, className }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");

  return inline ? (
    <SyntaxHighlighter
      language={match ? match[1] : "txt"}
      styles={github}
      showLineNumbers
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="py-1 px-1 rounded bg-gray-lighten-1">{children}</code>
  );
};
