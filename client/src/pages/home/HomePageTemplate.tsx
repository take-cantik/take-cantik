import { Container } from "~/components/Container";
import { Header } from "~/components/Header";
import { NewsList } from "~/pages/home/components/NewsList";
import { SocialLink } from "~/pages/home/components/SocialCard";
import { TabNavigation } from "~/components/TabNavigation";
import { BIO, NEWS_LIST, SOCIAL_LIST } from "./constants";

export const HomePageTemplete = () => (
  <>
    <Header>take-cantik.com</Header>
    <TabNavigation />
    <main className="w-full min-h-screen bg-gray-lighten-2">
      <Container>
        <section className="w-full">
          <h2 className="text-lg lg:text-xl font-bold mb-4">take-cantik</h2>
          <p className="w-full px-4 mt-3 lg:text-lg whitespace-pre-wrap">
            {BIO}
          </p>
        </section>
        <section className="w-full mt-9">
          <h2 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Social</h2>
          <nav className="w-full grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-5 justify-items-center px-4">
            {SOCIAL_LIST.map((social) => (
              <SocialLink social={social} key={social.name} />
            ))}
          </nav>
        </section>
        <section className="w-full mt-9">
          <h2 className="text-lg lg:text-xl font-bold mb-2">News</h2>
          <NewsList newsList={NEWS_LIST} />
        </section>
      </Container>
    </main>
  </>
);
