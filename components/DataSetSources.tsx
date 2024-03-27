import DangerMessage from "./DangerMessage";
import { formatSource } from "@/lib/formatSource";

export default function DataSetSources({ sources }: any) {
  const body =
    "No verified sources have been provided for this dataset, please be careful when using this data.";
  const title = "No sources";
  return (
    <div className="mb-8">
      <h4>Sources</h4>
      {sources.map((source: any, key: any) => {
        let citationString = formatSource(source, key);
        return (
          <div className="text-sm mb-2 last:mb-0" key={key}>
            {citationString}
          </div>
        );
      })}
      {sources.length === 0 && <DangerMessage body={body} title={title} />}
    </div>
  );
}
