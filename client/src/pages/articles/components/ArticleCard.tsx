import Link from "next/link";

type ArticleCardProps = {
  id: string;
  emoji: string;
  title: string;
  date: string;
  markdownText: string;
};

export const ArticleCard = ({
  id,
  emoji,
  title,
  date,
  markdownText,
}: ArticleCardProps) => (
  <div className="w-full flex gap-3 bg-white p-3 lg:p-4 rounded-lg">
    <Link href={`/articles/${id}/`} className="text-3xl">
      {emoji}
    </Link>
    <div className="w-full">
      <p className="text-base text-black-lighten-1">{date}</p>
      <Link href={`/articles/${id}/`} className="w-fit block mb-2">
        <h2 className="w-fit text-lg lg:text-xl font-bold after:content-[''] after:block after:w-0 hover:after:w-full after:h-[1px] after:bg-black after:duration-300">
          {title}
        </h2>
      </Link>
      <p className="w-full min-h-[48px] text-black-lighten-1 line-clamp-2">
        {markdownText}
      </p>
    </div>
  </div>
);
