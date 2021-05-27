import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICart } from "../../auth/helpers/auth.helper";
import useAuth from "../../auth/useAuth";
import { routes } from "../../helpers/routes.helper";
import { CartService } from "../../services/cart.service";
import "./styles/carts.scss";

const cartService = new CartService();

export default function Cart() {
  const { user, token, isLoggedIn } = useAuth();
  const [cart, setCart] = useState<ICart[] | null>(null);
  useEffect(() => {
    if (user && user?.cart) setCart(user.cart);
    else setCart(null);
  }, [user, token]);

  return (
    <section className="cart-page">
      <div className="cart-page__container container-flex column responsive">
        <div className="left__container">
          <div className="container-flex column center">
            {!cart ? (
              <>
                <span>Your cart is empty</span>
                <Link
                  to={routes.login}
                  children="Login"
                  className="btn btn-red"
                  style={
                    isLoggedIn ? { display: "none" } : { display: "block" }
                  }
                />
              </>
            ) : (
              <>
                <h2>Have items</h2>
              </>
            )}
          </div>
        </div>
        <div className="right__container container-flex column">
          <div className="right__header">
            <span>Pay</span>
          </div>
          <div className="right__fill"></div>
          <div className="right__footer container-flex">
            <button
              className="btn btn-green"
              onClick={async () => {
                if (token && user?.id) {
                  console.log(
                    await cartService.addProductToCart(
                      token,
                      { productId: 3, count: 1 },
                      user
                    )
                  );
                }
              }}
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
