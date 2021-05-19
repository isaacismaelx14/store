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

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products/:id" component={Product} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/stores" component={Stores} />
      <Route exact path="/profile/edit" component={EditProfile} />
      <Route exact path="/profile/details" component={ProfileDetails} />
      <Route exact path="/profiles/:id" component={Profile} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
