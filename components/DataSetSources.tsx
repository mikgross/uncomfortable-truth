import {
  Books,
  BooksPart,
  ConferencePapers,
  ConferenceProceedings,
  JournalArticles,
  Websites,
} from "@/lib/interfaces";
import DataSetSourcesNoSources from "./DataSetSourcesNoSources";
import { formatSource } from "@/lib/formatSource";

interface Params {
  sources: Array<
    | Books
    | BooksPart
    | ConferenceProceedings
    | ConferencePapers
    | JournalArticles
    | Websites
  >;
}

export default function DataSetSources({ sources }: Params) {
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
      {sources.length === 0 && <DataSetSourcesNoSources />}
    </div>
  );
}
