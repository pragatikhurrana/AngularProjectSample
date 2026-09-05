export interface User {
  id: number;
  name: string;
  avatar: string;
  tasks: { description: string; status: string }[];
}