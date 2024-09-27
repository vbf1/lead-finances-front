import { IUser } from "@/interface/user.interface";

export interface IAuth {
  userAuthenticated: IUser | null;
  token: string | null;
}

export interface ResponseAuth {
  data: {
    accessToken: string;
    existUser: IUser;
  };
}
