import { getAllCategories } from "@/lib/api";
import Link from "next/link";

export default function Home() {
  const categories = getAllCategories();
  const classeNames = {
    categories:
      "h-[100px] w-[100px] flex justify-center items-center mr-4 mb-4 border-[rgb(var(--accent))] border-2 transition-all hover:cursor-pointer hover:scale-105 text-sm text-center uppercase text-[rgb(var(--accent))] active:scale-100 ",
  };
  return (
    <main className="px-[15%]">
      <div className="pt-20 text-center">
        <h1 className="text-4xl mb-6 uppercase">Uncomfortable Truth</h1>
        <div className="text-lg">
          <p>
            A website sharing data gathered via open source contributions and
            peer reviewed by a committee of independent reviewers.
          </p>
          <p>We will not hide truth, not even the uncomfortable one.</p>
          <p>
            We believe data should be available and widely distributed for
            anyone to see.
          </p>
          <p>We will try to present facts in the most unbiased way possible.</p>
        </div>
      </div>
      <div className="pt-20 text-left">
        <h2 className="mb-5 text-xl">Categories</h2>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <div className={classeNames.categories}>{category.slug}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
