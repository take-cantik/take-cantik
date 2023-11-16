import Link from "next/link";
import { News } from "~/pages/home/types";

type NewsProps = {
  news: News;
};

export const NewsItem = ({ news }: NewsProps) => (
  <Link
    href={news.path}
    className="w-full block px-4 lg:text-lg text-black-lighten-1 hover:text-black overflow-hidden text-ellipsis whitespace-nowrap duration-300"
  >{`${news.date}: ${news.content}`}</Link>
);
