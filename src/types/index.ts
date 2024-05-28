export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: "female" | "male";
  status: "active" | "inactive";
}

export interface DataHeader {
  id: number;
  title: string;
  path: string;
}
