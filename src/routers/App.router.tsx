import { Route, Switch } from "react-router";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Login from "../pages/login";
import Product from "../pages/product";
import Stores from "../pages/stores";
import Register from "../pages/register";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Profile from "../pages/private/Profile";
import EditProfile from "../pages/private/EditProfile";
import ProfileDetails from "../pages/private/ProfileDetails";
import { routes } from "../helpers/routes.helper";
import PrivateRoute from "./Private.route";
import PublicRoute from "./Public.route";

export default function AppRouter(): JSX.Element {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.cart} component={Cart} />
      <PublicRoute exact path={routes.login} component={Login} />
      <PublicRoute exact path={routes.register} component={Register} />
      <Route exact path={routes.products.home} component={Products} />
      <Route exact path={routes.products.byId()} component={Product} />
      <Route exact path={routes.stores} component={Stores} />
      <PrivateRoute exact path={routes.profile.edit} component={EditProfile} />
      <PrivateRoute
        exact
        path={routes.profile.details}
        component={ProfileDetails}
      />
      <Route exact path={routes.profiles()} component={Profile} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
