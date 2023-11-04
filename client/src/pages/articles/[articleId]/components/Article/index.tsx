import Markdown from "react-markdown";
import { Heading } from "./Heading";
import { Code } from "./Code";
import remarkGfm from "remark-gfm";

type ArticleProps = {
  emoji: string;
  title: string;
  date: string;
  markdownText: string;
};

export const Article = ({ emoji, title, date, markdownText }: ArticleProps) => {
  return (
    <article>
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{emoji}</span>
        <p className="text-xl text-black-lighten-1">{date}</p>
      </div>
      <h1 className="text-3xl font-bold pb-3 mb-6 border-b">{title}</h1>
      <Markdown
        components={{
          h1: (props) => <Heading level="1" {...props} />,
          h2: (props) => <Heading level="2" {...props} />,
          h3: (props) => <Heading level="3" {...props} />,
          code: (props) => <Code {...props} />,
        }}
        remarkPlugins={[remarkGfm]}
        className="markdown"
      >
        {markdownText}
      </Markdown>
    </article>
  );
};
