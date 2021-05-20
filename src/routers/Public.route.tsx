import { Redirect, Route } from "react-router";
import useAuth from "../auth/useAuth";
import { routes } from "../helpers/routes.helper";

export default function PublicRoute(props: any): JSX.Element {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return <Redirect to={routes.home} />;
  return <Route {...props} />;
}
