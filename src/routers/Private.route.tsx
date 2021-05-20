import { Redirect, Route } from "react-router";
import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { routes } from "../helpers/routes.helper";

export default function PrivateRoute(props: any): JSX.Element {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn)
    return (
      <Redirect
        to={{ pathname: routes.login, state: { from: location.pathname } }}
      />
    );
  return <Route {...props} />;
}
