import { Redirect, Route } from "react-router";
import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { routes } from "../helpers/routes.helper";

export default function PrivateRoute({
  type: requireType,
  ...rest
}: any): JSX.Element {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  if (!isLoggedIn)
    return (
      <Redirect
        to={{ pathname: routes.login, state: { from: location.pathname } }}
      />
    );
  if (requireType && user?.type !== undefined && user.type < requireType)
    return <Redirect to={{ pathname: routes.home }} />;

  return <Route {...rest} />;
}
