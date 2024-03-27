import CategoryCard from "@/components/CategoryCard";
import { getAllCategories } from "@/lib/api";

export default function Home() {
  const data = getAllCategories();
  return (
    <main>
      <div className="text-center mb-6">
        <h1>{"(Un)comfortable Truth"}</h1>
        <div className="text-left">
          <p>
            Our goal is to share data gathered via open source contributions for
            free. We believe data should be available and distributed for anyone
            to see and analyse.
          </p>
        </div>
      </div>
      <div className="text-left">
        <h2>Categories</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((category, key) => (
            <CategoryCard category={category} key={key} />
          ))}
        </div>
      </div>
    </main>
  );
}
