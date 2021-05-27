export interface IUser {
  id?: number;
  names?: string;
  last_names?: string;
  email?: string;
  password?: string;
  sex?: number;
  direction?: string;
  cart?: ICart[];
  birthday?: string;
  type?: number;
  created_date?: string;
}

export interface ICart {
  productId: number;
  count: number;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IAuthContext {
  user: IUser | null;
  login: (a: ILoginData) => void | any;
  isLoggedIn: boolean;
  logout: any;
  token: string | null;
}

const defaultFuncion = (fun: string) =>
  console.error(`The function ${fun}() is not defined`);

export const DefaultValue: IAuthContext = {
  user: null,
  login: () => defaultFuncion("login"),
  logout: () => defaultFuncion("logout"),
  isLoggedIn: false,
  token: null,
};
