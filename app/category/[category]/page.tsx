import { getPartialData } from "@/lib/api";
import { categories } from "@/lib/classes";
import Link from "next/link";

export default function CategoryPage({ params }: any) {
  const { category } = params;
  const dataSets = getPartialData(category);
  return (
    <main>
      <div className="text-center">
        <h2>{category}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {dataSets.map((data) => (
          <Link href={`/category/${category}/${data.slug}`} key={data.slug}>
            <div className="h-[100px] flex justify-center items-center border-[rgb(var(--accent))] border-2 transition-all hover:cursor-pointer hover:scale-105 text-sm text-center uppercase text-[rgb(var(--accent))] active:scale-100 ">
              {data.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
