import Link from "next/link";

export default function ArticleCard({ category, data }: any) {
  return (
    <Link href={`/category/${category}/${data.slug}`} key={data.slug}>
      <div className="flex flex-col border-2 dark:border-0 border-[rgb(var(--accent))] dark:bg-[rgb(var(--bg-contrast))] hover:cursor-pointer hover:rotate-1 text-sm text-left active:scale-100 rounded-xl overflow-hidden transition-all">
        <div className="p-4 pb-0">
          <h4 className="mb-0 text-[rgb(var(--foreground-rgb))]">
            {data.name}
          </h4>
        </div>
        <div className="p-4 text-[rgb(var(--foreground-rgb))]">
          {data.desc}
          <hr className="my-2" />
          {data.submitters.map((submitter: string, key: any) => (
            <span key={key}>
              <strong>
                {submitter}
                {key < data.submitters.length - 1 ? ", " : ""}
              </strong>
            </span>
          ))}{" "}
          <br />
          {data.dateSubmitted}
        </div>
      </div>
    </Link>
  );
}
