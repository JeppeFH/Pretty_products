import SectionHeader from "../../components/sectionHeader/SectionHeader";
import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero.webp";
import Favorites from "../../components/favorites/Favorites";

const Home = () => {
  return (
    <article>
      <PageHero title="Quality furnitures" heroImg={heroImg} />

      <SectionHeader title="Favorites" />
      <Favorites />
    </article>
  );
};

export default Home;
