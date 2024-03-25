import { getPartialData } from "@/lib/api";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

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
  console.log(dataSets);
  return (
    <main>
      <h2>{category}</h2>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {dataSets.map((data) => (
          <Link href={`/category/${category}/${data.slug}`} key={data.slug}>
            <div className="flex flex-col hover:cursor-pointer hover:scale-105 text-sm text-left active:scale-100 rounded-xl text-[rgb(var(--background))] overflow-hidden transition-all ">
              <div className="bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent-sec))] p-4">
                <h4 className="mb-0">{data.name}</h4>
              </div>
              <div className="bg-white p-4">
                {data.desc}
                <hr className="my-2" />
                {data.submitters.map((submitter: string, key: any) => (
                  <span key={key}>
                    {submitter}
                    {key < data.submitters.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                <br />
                {data.dateSubmitted}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
