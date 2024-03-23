import { getDataFile } from "@/lib/api";
import Image from "next/image";
import Markdown from "react-markdown";

export default function DataPage({ params }: any) {
  const { category, dataset } = params;
  const data = getDataFile(category, dataset);
  console.log(data);
  return (
    <main>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <hr className="my-8" />
      {data && data.image && (
        <div className="rounded-xl overflow-hidden mb-8">
          <Image
            src={data.image}
            alt={data.name}
            width={2000}
            height={100}
          ></Image>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:order-last">{data.data.chartType}</div>
        <div>
          <Markdown>{data.details}</Markdown>
        </div>
      </div>
    </main>
  );
}
