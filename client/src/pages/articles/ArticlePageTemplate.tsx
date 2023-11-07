import { Container } from "~/components/Container";
import { Header } from "~/components/Header";
import { ArticleCard } from "./components/ArticleCard";

type ArticlePageTemplateProps = {
  articleList: {
    id: string;
    emoji: string;
    title: string;
    date: string;
    markdownText: string;
  }[];
};

export const ArticlePageTemplate = ({
  articleList,
}: ArticlePageTemplateProps) => (
  <>
    <Header>take-cantik.com</Header>
    <main className="w-full min-h-screen bg-gray-lighten-2">
      <Container>
        <div className="w-full flex flex-col gap-5">
          {articleList.map((article) => (
            <ArticleCard
              id={article.id}
              emoji={article.emoji}
              title={article.title}
              date={article.date}
              markdownText={article.markdownText}
              key={article.id}
            />
          ))}
        </div>
      </Container>
    </main>
  </>
);
