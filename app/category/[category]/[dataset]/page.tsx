import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { getDataFile } from "@/lib/api";
import SocialImage from "@/components/SocialImage";
import DataSetTopheader from "@/components/DataSetTopHeader";
import DataSetSources from "@/components/DataSetSources";
import DataSetPublishers from "@/components/DataSetPeople";
import Chart from "@/components/Chart";
import DataSetPeople from "@/components/DataSetPeople";

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
        <Chart
          data={dataSet.data.data}
          xDensity={dataSet.data.density}
          type={dataSet.data.type}
          colors={dataSet.data.colors}
          labels={{ x: dataSet.data.xAxis, y: dataSet.data.yAxis }}
        />
        <div className="mb-8">
          <Markdown>{dataSet.details}</Markdown>
        </div>
        <hr className="mb-8" />
        <DataSetSources sources={dataSet.data.sources} />
        <DataSetPeople
          publishers={dataSet.submitters}
          submitted={dataSet.submitted}
          title="Submitted"
        />
        <DataSetPeople
          publishers={dataSet.reviewers}
          submitted={dataSet.published}
          title="Reviewed"
        />
      </div>
    </main>
  );
}
