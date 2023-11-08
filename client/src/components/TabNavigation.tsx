import Link from "next/link";
import { BookIcon } from "./icons/BookIcon";
import { ArticleIcon } from "./icons/ArticleIcon";
import { useRouter } from "next/router";

export const TabNavigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className="w-full h-10 flex items-center gap-2 px-4 lg:px-8 bg-gray-lighten-1">
      <Link
        href="/"
        className={`w-fit h-8 flex items-center gap-2 relative px-2 text-black-lighten-2 rounded bg-gray-lighten-1 hover:bg-gray duration-300 ${
          pathname === "/" &&
          "after:content-[''] after:w-full after:h-1 after:absolute after:left-0 after:-bottom-1 after:bg-black-lighten-2 after:rounded-sm"
        }`}
      >
        <BookIcon />
        Overview
      </Link>
      <Link
        href="/articles"
        className={`w-fit h-8 flex items-center gap-2 relative px-2 text-black-lighten-2 rounded bg-gray-lighten-1 hover:bg-gray duration-300 ${
          pathname === "/articles" &&
          "after:content-[''] after:w-full after:h-1 after:absolute after:left-0 after:-bottom-1 after:bg-black-lighten-2 after:rounded-sm"
        }`}
      >
        <ArticleIcon />
        Articles
      </Link>
    </nav>
  );
};
