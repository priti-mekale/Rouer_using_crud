export enum UserRole {
  ADMIN = 'Admin',
  USER = 'User',
  MANAGER = 'Manager'
}


export interface IUser {
  id: number | string;
  name: string;
  email: string;
  age: number;
  role: UserRole;
}