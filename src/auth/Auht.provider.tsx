import { createContext, useCallback, useEffect, useState } from "react";
import { Context } from "react";
import * as helper from "./helpers/auth.helper";
import { IAuthContext, IUser } from "./helpers/auth.helper";
const { DefaultValue } = helper;

export const AuthContext: Context<IAuthContext> =
  createContext<IAuthContext>(DefaultValue);

export default function AuhtProvider({ children }: any): JSX.Element {
  // const [user, setUser] = useState<IUser | null>(null);
  const [user, setUser] = useState<IUser | null>({
    id: 1,
    names: "isaac ismael",
    last_names: "martinez medrano",
    email: "test@test.local",
    sex: 1,
    type: 0,
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  //todo: add (data: ILoginData)

  useEffect(() => setIsLoggedIn(!!user), [user]);

  const login = () => {
    setUser({
      id: 1,
      names: "isaac ismael",
      last_names: "martinez medrano",
      email: "test@test.local",
      sex: 1,
      type: 0,
    });
  };

  const logout = useCallback(() => setUser(null), []);

  const contextValue: IAuthContext = {
    user,
    login,
    isLoggedIn,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
