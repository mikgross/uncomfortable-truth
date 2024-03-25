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
            Our goal is to share data gathered via open source contributions for
            free. We believe data should be available and distributed for anyone
            to see and analyse.
          </p>
        </div>
      </div>
      <div className="text-left">
        <h2>Categories</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <div className="flex flex-col h-[50px] items-center justify-center border-2 dark:border-0 border-[rgb(var(--accent))] dark:bg-[rgb(var(--bg-contrast))] hover:cursor-pointer hover:rotate-1 text-sm text-center active:scale-100 rounded-xl overflow-hidden transition-all">
                <h4 className="uppercase mb-0 text-[rgb(var(--foreground-rgb))]">
                  {category.slug}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
