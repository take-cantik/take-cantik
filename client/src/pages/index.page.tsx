import { GetStaticProps, InferGetStaticPropsType } from "next";
import { HomePageTemplete } from "./home/HomePageTemplate";
import { News } from "./home/types";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

type HomePageProps = {
  newsList: News[];
};

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const newsList = readdirSync(`${process.cwd()}/src/articles`, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isFile())
    .sort(
      (a, b) =>
        Number(b.name.replace(/\.md$/, "")) -
        Number(a.name.replace(/\.md$/, ""))
    )
    .slice(0, 5)
    .map((dirent) => {
      const fileContent = readFileSync(
        `${process.cwd()}/src/articles/${dirent.name}`,
        "utf-8"
      );

      const articleId = dirent.name.replace(/\.md$/, "");

      const { data } = matter(fileContent);
      const year = articleId.slice(0, 4);
      const month = articleId.slice(4, 6);
      const day = articleId.slice(6, 8);

      return {
        date: `${year}-${month}-${day}`,
        content: `${data.emoji} ${data.title}`,
        path: `/articles/${articleId}/`,
      };
    });

  return {
    props: {
      newsList,
    },
  };
};

export default function Home({
  newsList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePageTemplete newsList={newsList} />;
}
