import { Metadata } from "next";
import Markdown from "react-markdown";
import { getDataFile } from "@/lib/api";
import DataSetTopheader from "@/components/DataSetTopHeader";
import DataSetSources from "@/components/DataSetSources";
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
    openGraph: {
      title: `${
        dataSet.name
      } | ${category.toUpperCase()} | (Un)comfortable Truth`,
      description: `Explore data present in the ${
        dataSet.name
      } data set. This data set is part of the ${category.toUpperCase()} category.`,
      type: "website",
      url: "https://uc.mmpg.xyz",
      images: ["https://uc.mmpg.xyz/og-image.jpg"],
      siteName: "(Un)comfortable Truth",
    },
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
          body="This dataset has not been reviewed yet. Be careful when using its data or reading its information."
          titleMessage="No reviewers for this dataset."
        />
      </div>
    </main>
  );
}
