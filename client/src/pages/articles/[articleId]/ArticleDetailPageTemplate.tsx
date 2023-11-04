import { Container } from "~/components/Container";
import { Header } from "~/components/Header";
import { Article } from "./components/Article";

type ArticleDetailPageTemplateProps = {
  emoji: string;
  title: string;
  date: string;
  markdownText: string;
};

export const ArticleDetailPageTemplate = ({
  emoji,
  title,
  date,
  markdownText,
}: ArticleDetailPageTemplateProps) => (
  <>
    <Header>take-cantik.com / {title}</Header>
    <main className="w-full min-h-screen bg-gray-lighten-2">
      <Container>
        <Article
          emoji={emoji}
          title={title}
          date={date}
          markdownText={markdownText}
        />
      </Container>
    </main>
  </>
);
