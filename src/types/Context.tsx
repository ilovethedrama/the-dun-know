import { VisitorConfig } from "./Config"
import { Article } from "./Article"

export interface ctxType {
  config: VisitorConfig | null | undefined;
  highlightedArticles: Article[];
  author: string | null;
  linkedArticles: Article[];
  title: string | null;
  invert: boolean;
}