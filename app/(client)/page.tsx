import HeroSlider from "@/components/main/homepage/HeroSlider";
import { prisma } from "@/lib/prismadb";

export default async function Home() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <section>
      <div className="w-screen h-[80vh] flex">
        {categories.length !== 0 ? (
          <HeroSlider categories={categories} />
        ) : (
          <div>
            <p>No categories added</p>
          </div>
        )}
      </div>

      <div className="wrapper">
        <h1>Client Homepage</h1>
      </div>
    </section>
  );
}
