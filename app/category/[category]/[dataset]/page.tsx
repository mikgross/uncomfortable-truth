import Markdown from "react-markdown";
import { getDataFile } from "@/lib/api";
import ClientLineChart from "@/components/ClientLineChart";
import Image from "next/image";

export default function DataPage({ params }: any) {
  const { category, dataset } = params;
  const dataSet = getDataFile(category, dataset);

  return (
    <main>
      <h2>{dataSet.name}</h2>
      <div className="flex flex-row justify-between mb-4">
        <div>
          {dataSet.submitters.map((submitter: any, key: any) => (
            <div key={key} className="flex flex-row items-center mr-2">
              <div className="mr-2">
                <Image
                  className="rounded-full border-2 border-[rgb(var(--accent))]"
                  src={submitter.avatar}
                  width={30}
                  height={30}
                  alt="User's Avatar"
                />
              </div>
              <div>{submitter.name}</div>
            </div>
          ))}
        </div>
        <div>{dataSet.submitted}</div>
      </div>
      <p>{dataSet.description}</p>
      <hr className="my-8" />
      <div>
        <div>
          <ClientLineChart
            data={dataSet.data.data}
            xDensity={dataSet.data.density}
            type={dataSet.data.type}
            colors={dataSet.data.colors}
            labels={{ x: dataSet.data.xAxis, y: dataSet.data.yAxis }}
          />
        </div>
        <div>
          <Markdown>{dataSet.details}</Markdown>
        </div>
      </div>
    </main>
  );
}
