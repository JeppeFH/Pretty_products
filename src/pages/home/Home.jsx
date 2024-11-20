import SectionHeader from "../../components/sectionHeader/SectionHeader";
import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero.webp";

const Home = () => {
  return (
    <article>
      <PageHero title="Quality furnitures" heroImg={heroImg} />

      <SectionHeader title="Favorites" />
    </article>
  );
};

export default Home;
