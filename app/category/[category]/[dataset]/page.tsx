import { getDataFile } from "@/lib/api";
import Image from "next/image";

export default function DataPage({ params }: any) {
  const { category, dataset } = params;
  const data = getDataFile(category, dataset);
  console.log(data);
  return (
    <main className="px-[15%] pt-10">
      <div className="rounded-t-xl overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          width={2000}
          height={100}
        ></Image>
      </div>
      <div className="pt-10 text-xl uppercase">{data.name}</div>
      <div className="pt-2 text-sm">{data.description}</div>
      <div className="flex flex-row text-white h-10">
        <div className="w-[50%]">desc</div>
        <div className="w-[50%]">graph</div>
      </div>
    </main>
  );
}
