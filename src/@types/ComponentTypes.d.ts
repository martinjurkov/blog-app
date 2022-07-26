import { BlogDataTypes } from './BlogDataTypes';

export interface BlogItemTypes {
  item: BlogDataTypes;
  handleArticleView: (viewBlogArticle: BlogDataTypes) => void;
}

export interface BlogListTypes {
  blog: BlogDataTypes[];
  handleArticleView: (viewBlogArticle: BlogDataTypes) => void;
}
