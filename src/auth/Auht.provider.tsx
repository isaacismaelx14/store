import { createContext, useCallback, useEffect, useState } from "react";
import { Context } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { routes } from "../helpers/routes.helper";
import { storage } from "../services/storages.service";
import UsersServices from "../services/user.service";
import * as helper from "./helpers/auth.helper";
import { IAuthContext, ILoginData, IUser } from "./helpers/auth.helper";
const { DefaultValue } = helper;

export const AuthContext: Context<IAuthContext> =
  createContext<IAuthContext>(DefaultValue);

const userService = new UsersServices();

export default function AuhtProvider({ children }: any): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const location = useLocation<any>();
  const history = useHistory();

  useEffect(() => {
    if (user && location.state && location.state.from)
      history.push(location.state.from);

    setIsLoggedIn(!!user);
  }, [user, location, history]);
  useEffect(() => {
    const getSaved = storage.token.getLocal();
    if (getSaved)
      userService.getUserData(getSaved).then((user) => setUser(user));
  }, []);

  const login = async (userData: ILoginData) => {
    userService
      .login(userData)
      .then(({ token }) => {
        setToken(token);
        storage.token.saveLocal(token);
        return userService.getUserData(token);
      })
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  };

  const logout = useCallback(() => {
    storage.token.removeLocal();
    setUser(null);
  }, []);

  const contextValue: IAuthContext = {
    user,
    login,
    isLoggedIn,
    logout,
    token,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
