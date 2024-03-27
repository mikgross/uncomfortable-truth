import { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getPartialData } from "@/lib/api";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { category } = params;
  return {
    title: `${category.toUpperCase()} | (Un)comfortable Truth`,
    description: `Explore data present in the ${category} category`,
  };
}

export default function CategoryPage({ params }: any) {
  const { category } = params;
  const dataSets = getPartialData(category);
  return (
    <main>
      <h2>{category}</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dataSets.map((data, key) => (
          <ArticleCard category={category} data={data} key={key} />
        ))}
      </div>
    </main>
  );
}
