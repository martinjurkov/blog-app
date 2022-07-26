import { BlogDataTypes } from './BlogDataTypes';

export interface BlogViewTypes {
  singleItem: BlogDataTypes | {};
  related: BlogDataTypes | {};
  handleArticleView: any;
}

export interface BlogViewHeaderTypes {
  singleItem: any | {};
}

export interface BlogViewBodyTypes {
  singleItem: any | {};
}

export interface NavbarListTypes {
  related: any | {};
  handleArticleView: any;
}

export interface NavbarItemTypes {
  item: BlogDataTypes;
  handleArticleView: any;
}

export interface BlogViewCommentsTypes {
  related: any;
  handleArticleView: any;
  singleItem: any;
}

export interface BlogViewCommentsListTypes {
  related: BlogDataTypes[] | [{}];
  handleArticleView: any;
  singleItem: any;
}

export interface BlogViewCommentsItemTypes {
  item: any;
}
