import Markdown from "react-markdown";
import { getDataFile } from "@/lib/api";
import ClientLineChart from "@/components/ClientLineChart";
import Image from "next/image";
import { Metadata } from "next";
import SocialImage from "@/components/SocialImage";
import Link from "next/link";
import DataSetTopheader from "@/components/DataSetTopHeader";
import DataSetSources from "@/components/DataSetSources";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { category, dataset } = params;
  const dataSet = getDataFile(category, dataset);
  return {
    title: `${
      dataSet.name
    } | ${category.toUpperCase()} | (Un)comfortable Truth`,
    description: `Explore data present in the ${
      dataSet.name
    } data set. This data set is part of the ${category.toUpperCase()} category.`,
  };
}

export default function DataPage({ params }: any) {
  const { category, dataset } = params;
  const dataSet = getDataFile(category, dataset);
  return (
    <main>
      <DataSetTopheader name={dataSet.name} desc={dataSet.description} />
      <div>
        <ClientLineChart
          data={dataSet.data.data}
          xDensity={dataSet.data.density}
          type={dataSet.data.type}
          colors={dataSet.data.colors}
          labels={{ x: dataSet.data.xAxis, y: dataSet.data.yAxis }}
        />
        <div className="mb-8">
          <Markdown skipHtml={false}>{dataSet.details}</Markdown>
        </div>
        <hr className="mb-8" />
        <DataSetSources sources={dataSet.data.sources} />

        <div className="flex flex-col mb-8">
          <h4>Published {dataSet.submitted}</h4>
          <div className="flex flex-row">
            {dataSet.submitters.map((submitter: any, key: any) => (
              <div key={key} className="flex flex-row items-center mr-2">
                <div className="mr-2">
                  <Image
                    className="rounded-full border-2 border-[rgb(var(--accent))]"
                    src={submitter.avatar}
                    width={50}
                    height={50}
                    alt="User's Avatar"
                  />
                </div>
                <div>
                  <div>{submitter.name}</div>
                  <div className="flex flex-row">
                    {submitter.links.map((link: any, key: any) => {
                      return (
                        <Link
                          href={link.url}
                          target="_blank"
                          key={key}
                          className="mr-2"
                        >
                          <SocialImage
                            type={link.type}
                            width={15}
                            height={15}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <h4>Reviewed {dataSet.published}</h4>
        </div>
        <div className="flex flex-row mb-4">
          <div className="flex flex-row">
            {dataSet.reviewers.map((submitter: any, key: any) => (
              <div key={key} className="flex flex-row items-center mr-2">
                <div className="mr-2">
                  <Image
                    className="rounded-full border-2 border-[rgb(var(--accent-sec))]"
                    src={submitter.avatar}
                    width={50}
                    height={50}
                    alt="User's Avatar"
                  />
                </div>
                <div>
                  <div>{submitter.name}</div>
                  <div className="flex flex-row">
                    {submitter.links.map((link: any, key: any) => {
                      return (
                        <Link
                          href={link.url}
                          target="_blank"
                          key={key}
                          className="mr-2"
                        >
                          <SocialImage
                            type={link.type}
                            width={15}
                            height={15}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
