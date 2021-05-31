import { createContext, useCallback, useEffect, useState } from "react";
import { Context } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  const [token, setToken] = useState<string | undefined | null>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);
  const location = useLocation<any>();
  const history = useHistory();

  const login = async (userData: ILoginData) => {
    userService
      .login(userData)
      .then((data) => {
        if (data?.token) {
          const { token } = data;
          setToken(token);
          storage.token.saveLocal(token);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.error(err);
        return { ...err };
      });
  };

  const logout = useCallback(() => {
    storage.token.removeLocal();
    setUser(null);
    history.push("/");
  }, [history]);

  const contextValue: IAuthContext = {
    user,
    login,
    isLoggedIn,
    logout,
    token,
  };

  useEffect(() => {
    if (token)
      userService.getUserData(token).then((getterUser: IUser) => {
        const { cart } = getterUser;
        if (cart)
          getterUser = { ...getterUser, cart: JSON.parse(cart?.toString()) };

        setUser(getterUser);
      });
  }, [token]);

  useEffect(() => {
    if (user && location.state && location.state.from)
      history.push(location.state.from);

    setIsLoggedIn(!!user);
  }, [user, location, history]);

  useEffect(() => {
    const getSaved = storage.token.getLocal();
    setToken(getSaved);
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
