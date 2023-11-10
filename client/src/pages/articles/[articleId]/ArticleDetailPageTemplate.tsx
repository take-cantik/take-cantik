import { Container } from "~/components/Container";
import { Header } from "~/components/Header";
import { Article } from "./components/Article";
import { TabNavigation } from "~/components/TabNavigation";

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
    <Header>
      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
        take-cantik.com / {title}
      </span>
    </Header>
    <TabNavigation />
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
