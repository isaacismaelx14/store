import { Route, Switch } from "react-router";
import { routes } from "../helpers/routes.helper";
import Home from "../pages/home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Stores from "../pages/Stores";
import Register from "../pages/Register";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Profile from "../pages/private/Profile";
import EditProfile from "../pages/private/EditProfile";
import ProfileDetails from "../pages/private/ProfileDetails";
import PrivateRoute from "./Private.route";
import PublicRoute from "./Public.route";
import CreateProduct from "../pages/private/admin/CreateProduct";
import CreateSeller from "../pages/private/admin/CreateSeller";
import Sellers from "../pages/private/admin/requests/Sellers";
import GetOneSeller from "../pages/private/admin/requests/GetOneSeller";

export default function AppRouter(): JSX.Element {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.cart} component={Cart} />
      <PublicRoute exact path={routes.login} component={Login} />
      <PublicRoute exact path={routes.register} component={Register} />
      <Route exact path={routes.products.home} component={Products} />
      <PrivateRoute
        exact
        path={routes.products.add}
        component={CreateProduct}
        type={1}
      />
      <Route exact path={routes.products.byId()} component={Product} />
      <Route exact path={routes.stores} component={Stores} />
      <PrivateRoute exact path={routes.profile.edit} component={EditProfile} />
      <PrivateRoute
        exact
        path={routes.profile.details}
        component={ProfileDetails}
      />
      <Route exact path={routes.profiles()} component={Profile} />
      <PrivateRoute exact path={routes.seller.add} component={CreateSeller} />
      <PrivateRoute
        exact
        path={routes.admin.requests.sellers.getAll}
        component={Sellers}
        type={2}
      />
      <PrivateRoute
        exact
        path={routes.admin.requests.sellers.byId()}
        component={GetOneSeller}
        type={2}
      />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
