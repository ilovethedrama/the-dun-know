import { VisitorConfig } from "./Config"
import { Article } from "./Article"

export interface ctxType {
  config: VisitorConfig | null | undefined;
  highlightedArticles: Article[];
  author: String | null;
  linkedArticles: Article[];
  title: String | null
}