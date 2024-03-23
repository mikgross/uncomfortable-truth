import { getAllCategories } from "@/lib/api";
import { categories } from "@/lib/classes";
import Link from "next/link";

export default function Home() {
  const data = getAllCategories();
  return (
    <main>
      <div className="text-center mb-6">
        <h1>{"Facts Spreader"}</h1>
        <div className="text-left">
          <p>
            Our goal is to share data gathered via open source contributions in
            a free and unbiased form. We peer review the data and associated
            description via an independent committee of qualified reviewers. We
            do not hide the truth, not even the uncomfortable ones. We believe
            data should be available and widely distributed for anyone to see
            and analyse. We present facts in the most unbiased way possible.
          </p>
        </div>
      </div>
      <div className="text-left">
        <h2>Categories</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {data.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <div className="h-[100px] flex justify-center items-center border-[rgb(var(--accent))] border-2 transition-all hover:cursor-pointer hover:scale-105 text-sm text-center uppercase text-[rgb(var(--accent))] active:scale-100 ">
                {category.slug}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
