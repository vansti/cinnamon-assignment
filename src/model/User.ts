export type UserId = number;

export interface User {
  id: UserId;
	login: string;
  avatar_url: string;
  html_url: string;
}