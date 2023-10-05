export type User = {
  id: number;
  username: string;
  email: string;
} | null;

export type NoteItem = {
  id: number;
  title: string;
  content: string;
  Frequence: string[];
  value: number;
  completed?: boolean;
  onDelete: (id: number) => void;
};
