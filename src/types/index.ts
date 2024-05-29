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

export interface UserCreate {
  name: string;
  email: string;
  gender: "male" | "female" | "other";
  status: "active" | "inactive";
}

export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

export interface DataHeader {
  id: number;
  title: string;
  path: string;
}

export type HeroCardProps = {
  badge: string;
  title: string;
  name: string;
  date: string;
  avatar: string;
};
