import {
  formatWebSource,
  formatJournalArticleSource,
  formatBookSource,
  formatBookPartSource,
  formatConferenceproceedingsSource,
  formatConferencePapersSource,
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
    case "BookPart":
      citationString = formatBookPartSource(source, key);
      break;
    case "ConferenceProceeding":
      citationString = formatConferenceproceedingsSource(source, key);
      break;
    case "ConferencePaper":
      citationString = formatConferencePapersSource(source, key);
      break;
    default:
      citationString = "";
      break;
  }
  return citationString;
}
