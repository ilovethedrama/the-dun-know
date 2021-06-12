import { createContext } from "react";
import { ctxType } from "../types/Context";

const ctx: ctxType = {
  config: null,
  highlightedArticles: [],
  author: null,
  linkedArticles: [],
  title: null,
  invert: false
}

const ArticleContext = createContext(ctx);
export default ArticleContext;