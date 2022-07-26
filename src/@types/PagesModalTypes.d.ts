import { BlogDataTypes } from './BlogDataTypes';

export interface ConfirmDeleteTypes {
  setViewDeleteModal: (e: boolean) => void;
  handleDelete: (id: string) => void;
  item: BlogDataTypes;
}
