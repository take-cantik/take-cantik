type ArticleCardProps = {
  emoji: string;
  title: string;
  date: string;
  markdownText: string;
};

export const ArticleCard = ({
  emoji,
  title,
  date,
  markdownText,
}: ArticleCardProps) => (
  <div className="w-full flex gap-3 bg-white p-3 lg:p-4 rounded-lg">
    <p className="text-3xl">{emoji}</p>
    <div className="w-full">
      <p className="text-base text-black-lighten-1">{date}</p>
      <h2 className="text-lg lg:text-xl font-bold mb-2">{title}</h2>
      <p className="w-full min-h-[48px] text-black-lighten-1 line-clamp-2">
        {markdownText}
      </p>
    </div>
  </div>
);
