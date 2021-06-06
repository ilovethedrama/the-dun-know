import { createContext } from "react";
import { Article } from "../types/Article";
import { VisitorConfig } from "../types/Config";
import { ctxType } from "../types/Context";

const context: ctxType = {
  config: null,
  highlightedArticles: [],
  author: null,
  linkedArticles: [],
  title: null
}
