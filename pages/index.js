import FeaturedProducts from "@/components/FeaturedProducts";
import FigureInfo from "@/components/FigureInfo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative w-screen">
      <Header />
      <Hero />
      <FigureInfo />
      <FeaturedProducts />
    </div>
  );
}