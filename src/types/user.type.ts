import { UserEnum } from './enums/user.enum.js';

export type User = {
  name: string;
  email: string;
  avatar?: string;
  userType: UserEnum;
}
