import { News as TNews } from "~/types";
import { News } from "./News";

type NewsListProps = {
  newsList: TNews[];
};

export const NewsList = ({ newsList }: NewsListProps) => (
  <ul className="w-full">
    {newsList.map((news) => (
      <li
        key={news.date}
        className="w-full pt-4 after:content-[''] after:w-full after:h-[1px] after:block after:mt-4 after:bg-black-lighten-2"
      >
        <News news={news} />
      </li>
    ))}
  </ul>
);
