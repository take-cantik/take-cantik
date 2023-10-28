import { Link } from "react-router-dom";
import { News as TNews } from "~/types";

type NewsProps = {
  news: TNews;
};

export const News = ({ news }: NewsProps) => (
  <>
    {news.path ? (
      <Link
        to={news.path}
        className="w-full block px-4 lg:text-lg text-black-lighten-1 hover:text-black overflow-hidden text-ellipsis whitespace-nowrap duration-300"
      >{`${news.date}: ${news.content}`}</Link>
    ) : (
      <p className="w-full block px-4 lg:text-lg text-black-lighten-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {`${news.date}: ${news.content}`}
      </p>
    )}
  </>
);
