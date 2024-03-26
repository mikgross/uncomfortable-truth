import {
  formatWebSource,
  formatJournalArticleSource,
  formatBookSource,
} from "@mmpg-soft/sci-sources";

export function formatSource(source: any, key: number): string {
  let citationString = "";
  switch (source.type) {
    case "Website":
      citationString = formatWebSource(source, key);
      break;
    case "JournalArticle":
      citationString = formatJournalArticleSource(source, key);
      break;
    case "Book":
      citationString = formatBookSource(source, key);
      break;
    // todo: finish those cases
    case "BookPart":
      break;
    case "ConferenceProceeding":
      break;
    case "ConferencePaper":
      break;
    default:
      citationString = "";
      break;
  }
  return citationString;
}
