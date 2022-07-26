import { BlogDataTypes } from './BlogDataTypes';

export interface EditArticleTypes {
  handleEdit: (editBlog: BlogDataTypes[{}]) => void;
  blogData: any;
}

export interface EditArticleTitleTypes {
  articleTitle: string;
  setArticleTitle: (e: string) => void;
}

export interface EditArticleContentTypes {
  articleContent: string;
  setArticleContent: (e: string) => void;
  articlePerex: string;
  setArticlePerex: (e:string)=>void;
}
