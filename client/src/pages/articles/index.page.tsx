import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ArticlePageTemplate } from "./ArticlePageTemplate";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";

type ArticlePageProps = {
  articleList: {
    id: string;
    emoji: string;
    title: string;
    date: string;
    markdownText: string;
  }[];
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = () => {
  const articleList = readdirSync(`${process.cwd()}/src/articles`, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isFile())
    .sort(
      (a, b) =>
        Number(b.name.replace(/\.md$/, "")) -
        Number(a.name.replace(/\.md$/, ""))
    )
    .map((dirent) => {
      const fileContent = readFileSync(
        `${process.cwd()}/src/articles/${dirent.name}`,
        "utf-8"
      );

      const articleId = dirent.name.replace(/\.md$/, "");

      const { data, content } = matter(fileContent);
      const year = articleId.slice(0, 4);
      const month = articleId.slice(4, 6);
      const day = articleId.slice(6, 8);

      return {
        id: articleId,
        emoji: data.emoji,
        title: data.title,
        date: `${year}-${month}-${day}`,
        markdownText: content,
      };
    });

  return {
    props: {
      articleList,
    },
  };
};

function ArticlePage({
  articleList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ArticlePageTemplate articleList={articleList} />;
}

export default ArticlePage;
