import { News } from "~/pages/home/types";
import { NewsItem } from "./NewsItem";

type NewsListProps = {
  newsList: News[];
};

export const NewsList = ({ newsList }: NewsListProps) => (
  <ul className="w-full">
    {newsList.map((news) => (
      <li
        key={news.date}
        className="w-full pt-4 after:content-[''] after:w-full after:h-[1px] after:block after:mt-4 after:bg-black-lighten-2"
      >
        <NewsItem news={news} />
      </li>
    ))}
  </ul>
);
