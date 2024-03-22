import { getPartialData } from "@/lib/api";
import Link from "next/link";

export default function CategoryPage({ params }: any) {
  const classeNames = {
    categories:
      "h-[100px] w-[100px] flex justify-center items-center mr-4 mb-4 border-[rgb(var(--accent))] border-2 transition-all hover:cursor-pointer hover:scale-105 text-sm text-center uppercase text-[rgb(var(--accent))] active:scale-100 ",
  };
  const { category } = params;
  const dataSets = getPartialData(category);
  return (
    <main className="pt-20 px-[15%]">
      <div className="text-center">
        <h1 className="text-4xl mb-6 uppercase">{category}</h1>
      </div>
      <div className=" text-left">
        <h2 className="mb-5 text-xl">Categories</h2>
        <div className="flex flex-wrap">
          {dataSets.map((data) => (
            <Link href={`/category/${category}/${data.slug}`} key={data.slug}>
              <div className={classeNames.categories}>{data.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
