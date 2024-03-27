import Link from "next/link";

export default function CategoryCard({ category }: any) {
  return (
    <Link href={`/category/${category.slug}`} key={category.slug}>
      <div className="flex flex-col h-[50px] items-center justify-center border-2 dark:border-0 border-[rgb(var(--accent))] dark:bg-[rgb(var(--bg-contrast))] hover:cursor-pointer hover:rotate-1 text-sm text-center active:scale-100 rounded-xl overflow-hidden transition-all">
        <h4 className="uppercase mb-0 text-[rgb(var(--foreground-rgb))]">
          {category.slug}
        </h4>
      </div>
    </Link>
  );
}
