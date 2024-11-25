import SectionHeader from "../../components/sectionHeader/SectionHeader";
import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero.webp";
import Favorites from "../../components/favorites/Favorites";
import MyFavorites from "../../components/myfavorites/MyFavorites";
import Newsletter from "../../components/newsletter/Newsletter";

const Home = () => {
  return (
    <article>
      <PageHero title="Quality furnitures" heroImg={heroImg} />

      <SectionHeader title="Favorites" />
      <Favorites />

      <SectionHeader title="My favorites" />
      <MyFavorites />

      <SectionHeader title="Tilmeld dig vores nyhedsbrev" />
      <Newsletter />
    </article>
  );
};

export default Home;
