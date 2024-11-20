import PageHero from "../../components/pageHero/PageHero";
import heroImg from "../../assets/hero.webp";
import { useEffect, useState } from "react";
import styles from "./product.module.css";
import Button from "../../components/button/Button";
import { useFetchProducts } from "../../hooks/useFetchProduct";

const Recipes = () => {
  const { recipes, dinner, lunch, breakfast, dessert } = useFetchRecipes();

  /* Tilstand der indeholder de filterede opskrifter */
  const [filtered, setFiltered] = useState([
    ...dinner,
    ...lunch,
    ...breakfast,
    ...dessert,
  ]);

  const [activeFilter, setActiveFilter] = useState(["All"]);

  /* Objekt der indeholder arrays af opskrifter baseret på 'mealType' */
  const filters = {
    All: recipes,
    Dinner: dinner,
    Lunch: lunch,
    Breakfast: breakfast,
    Dessert: dessert,
  };

  /* Håndterer ændring af filter */
  const handleFilterChance = async (filter) => {
    setActiveFilter(filter);
    setFiltered(filters[filter]);
  };

  const recipesArray = filtered?.length > 0 ? filtered : recipes;

  return (
    <article>
      <PageHero headerImg={heroImg} />
    </article>
  );
};

export default Recipes;
