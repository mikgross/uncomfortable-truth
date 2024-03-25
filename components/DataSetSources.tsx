import DataSetSourcesNoSources from "./DataSetSourcesNoSources";
// todo - add source component: Books, Chapter or part of a book, conference proceedings, conference papers, journal articles, websites
// ref https://library.bu.edu/csestyle#:~:text=Websites-,General%20format%3A%20Author.,update%2FDate%20of%20citation%5D.

interface Source {
  id: number;
  link: string | null;
  author: string;
}

interface In {
  // of book
  author: string; // Author of the paper
  edition: string;
  placePublication: string;
  pages: number;
}

interface Books extends Source {
  year: number;
  title: string; // Title of the paper
  edition: string;
  placePublication: string;
  publisher: string;
  pages: number;
}

interface BooksPart extends Source {
  year: number;
  title: string; // Title of the paper
  in: In;
  publisher: string;
  pages: number;
}

interface ConferenceProceedings extends Source {
  editor: string; // Editor of the proceedings
  year: string;
  title: string; // Title of the publication, or name of conference, or both;
  in: In;
  nameConference: string;
  datesConference: string;
  placeConference: string;
  placePublication: string;
  publisher: string;
  pages: number;
}

interface ConferencePapers extends Source {
  date: string; // Date of publication
  title: string; // Title of the paper
  connectivePhrase: string; // In; editor of the proceedings
  nameConference: string; // Title of the publication, or name of conference, or both;
  datesConference: string;
  placeConference: string;
  placePublication: string;
  publisher: string;
  pages: number;
}

interface JournalArticles extends Source {
  date: string; // Date of publication
  titleJournal: string;
  titleArticle: string;
  volumeIssueNumber: string;
  pages: string;
  url: string;
  dateAccessed: string;
}

interface Websites extends Source {
  title: string;
  url: string;
  dateAccessed: string;
  placePublication: string;
  publisher: string;
  datAccessed: string;
  availableFrom: string;
}

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
        return (
          <div key={key}>
            <div>{source.id}</div>
            <div>{source.author}</div>
          </div>
        );
      })}
      {sources.length === 0 && <DataSetSourcesNoSources />}
    </div>
  );
}
