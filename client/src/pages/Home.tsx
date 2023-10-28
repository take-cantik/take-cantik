import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";
import { SocialLink } from "../components/SocialCard";
import { bio, newsList, socialList } from "../data/home";

function Home() {
  return (
    <>
      <Header>take-cantik.com</Header>
      <main className="w-full min-h-screen bg-gray-lighten-2">
        <Container>
          <section className="w-full">
            <h2 className="text-lg mb-4">take-cantik</h2>
            <p className="w-full px-4 mt-3 whitespace-pre-wrap">{bio}</p>
          </section>
          <section className="w-full mt-5">
            <h2 className="text-lg mb-4">Social</h2>
            <nav className="w-full grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-5 justify-items-center px-4">
              {socialList.map((social) => (
                <SocialLink social={social} />
              ))}
            </nav>
          </section>
          <section className="w-full mt-5">
            <h2>News</h2>
            <NewsList newsList={newsList} />
          </section>
        </Container>
      </main>
    </>
  );
}

export default Home;
