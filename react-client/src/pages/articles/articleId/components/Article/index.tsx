import Markdown from "react-markdown";
import { Heading } from "./Heading";
import { Code } from "./Code";

type ArticleProps = {
  emoji: string;
  title: string;
  date: string;
  markdownText: string;
};

export const Article = ({ emoji, title, date, markdownText }: ArticleProps) => {
  return (
    <article>
      <div>
        <span>{emoji}</span>
        <p>{date}</p>
      </div>
      <h1>{title}</h1>
      <Markdown
        components={{
          h1: (props) => <Heading level="1" {...props} />,
          h2: (props) => <Heading level="2" {...props} />,
          h3: (props) => <Heading level="3" {...props} />,
          code: (props) => <Code {...props} />,
        }}
      >
        {markdownText}
      </Markdown>
    </article>
  );
};
