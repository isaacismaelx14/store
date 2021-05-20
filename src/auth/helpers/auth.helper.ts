export interface IUser {
  id?: number;
  names?: string;
  last_names?: string;
  email?: string;
  password?: string;
  sex?: number;
  direction?: string;
  cart?: JSON;
  birthday?: string;
  type?: number;
  created_date?: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IAuthContext {
  user: IUser | null;
  login: any;
  isLoggedIn: boolean;
}

const defaultFuncion = (fun: string) =>
  console.error(`The function ${fun}() is not defined`);

export const DefaultValue: IAuthContext = {
  user: null,
  login: () => defaultFuncion("login"),
  isLoggedIn: false,
};
