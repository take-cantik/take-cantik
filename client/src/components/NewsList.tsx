import { News } from "~/types";

type NewsListProps = {
  newsList: News[];
};

export const NewsList = ({ newsList }: NewsListProps) => (
  <ul className="w-full">
    {newsList.map((news) => (
      <li
        key={news.path}
        className="w-full pt-4 after:content-[''] after:w-full after:h-[1px] after:block after:mt-3 after:bg-black-lighten-2"
      >
        <a
          href={news.path}
          className="w-full block px-3 text-base text-black-lighten-1 hover:text-black overflow-hidden text-ellipsis whitespace-nowrap duration-300"
        >{`${news.date}: ${news.content}`}</a>
      </li>
    ))}
  </ul>
);
