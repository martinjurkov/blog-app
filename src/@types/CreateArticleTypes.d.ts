import { BlogDataTypes } from './BlogDataTypes';

export interface CreateArticleTitleTypes {
  articleTitle: string;
  setArticleTitle: (e: string) => void;
}

export interface CreateArticleContentTypes {
  articleContent: string;
  setArticleContent: (e: string) => void;
  articlePerex: string;
  setArticlePerex: (e: string) => void;
}

export interface CreateArticleTypes {
  handleAdd: (newBlog: any) => void;
}
