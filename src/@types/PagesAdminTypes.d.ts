import { BlogDataTypes } from './BlogDataTypes';

export interface AdminDashboardTypes {
  blogs: BlogDataTypes[];
  handleArticleView: any;
  setViewDeleteModal: (e: boolean) => void;
  viewDeleteModal: boolean;
  handleDelete: (id: string) => void;
}

export interface AdminBlogListTypes {
  blogs: BlogDataTypes[];
  handleArticleView: any;
  setViewDeleteModal: (e: boolean) => void;
  viewDeleteModal: boolean;
  handleDelete: (id: string) => void;
}

export interface AdminBlogItemTypes {
  item: BlogDataTypes;
  handleArticleView: any;
  setViewDeleteModal: (e: boolean) => void;
  viewDeleteModal: boolean;
  handleDelete: (id: string) => void;
}
