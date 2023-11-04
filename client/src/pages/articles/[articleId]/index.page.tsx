import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { ArticleDetailPageTemplate } from "./ArticleDetailPageTemplate";

type ArticleDetailPageProps = {
  emoji: string;
  title: string;
  date: string;
  markdownText: string;
};

export const getStaticPaths: GetStaticPaths = () => {
  const markdownFiles = readdirSync(`${process.cwd()}/src/articles`, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  const paths = markdownFiles.map((fileName) => ({
    params: {
      articleId: fileName.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleDetailPageProps> = (
  context
) => {
  const articleId = context.params?.articleId as string;
  const fileContent = readFileSync(
    `${process.cwd()}/src/articles/${articleId}.md`,
    "utf-8"
  );
  const { data, content } = matter(fileContent);
  const year = articleId.slice(0, 4);
  const month = articleId.slice(4, 6);
  const day = articleId.slice(6, 8);

  return {
    props: {
      emoji: data.emoji,
      title: data.title,
      date: `${year}-${month}-${day}`,
      markdownText: content,
    },
  };
};

function ArticleDetailPage({
  emoji,
  title,
  date,
  markdownText,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ArticleDetailPageTemplate
      emoji={emoji}
      title={title}
      date={date}
      markdownText={markdownText}
    />
  );
}

export default ArticleDetailPage;
