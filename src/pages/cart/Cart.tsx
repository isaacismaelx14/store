import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes.helper";
import "./styles/carts.scss";
export default function Cart() {
  return (
    <section className="cart-page">
      <div className="cart-page__container container-flex column responsive">
        <div className="left__container">
          <div className="container-flex column center">
            <span>Your cart is empty</span>
            <Link to={routes.login} children="Login" className="btn btn-red" />
          </div>
        </div>
        <div className="right__container container-flex column">
          <div className="right__header">
            <span>Pay</span>
          </div>
          <div className="right__fill"></div>
          <div className="right__footer container-flex">
            <button className="btn btn-green">Pay now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
