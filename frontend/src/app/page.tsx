import Categories from "@/components/home_sections/Categories";
import Hero from "@/components/home_sections/Hero";
import LatestProducts from "@/components/home_sections/LatestProducts";

export default function Home() {
  return (
    <div className="scrollbar">
      <Hero />
      <Categories />
      <LatestProducts />
    </div>
  );
}
