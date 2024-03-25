import { getAllCategories } from "@/lib/api";
import Link from "next/link";

export default function Home() {
  const data = getAllCategories();
  return (
    <main>
      <div className="text-center mb-6">
        <h1>{"(Un)comfortable Truth"}</h1>
        <div className="text-left">
          <p>
            Our goal is to share data gathered via open source contributions in
            a free and unbiased form. We believe data should be available and
            widely distributed for anyone to see and analyse.
          </p>
        </div>
      </div>
      <div className="text-left">
        <h2>Categories</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 mt-6">
          {data.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <div className="h-[80px] flex justify-center items-center bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent-sec))] transition-all hover:cursor-pointer hover:scale-105 text-sm text-center  active:scale-100 rounded-xl text-[rgb(var(--background))]">
                <h3 className="uppercase mb-0">{category.slug}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
