import axios from "axios";
import { ICart, IUser } from "../auth/helpers/auth.helper";



const path = "http://192.168.1.114:3001/users";

export class CartService {
  private setHeader(token: string) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }

  private addItems(user: IUser, cart: any): string {
    let newArray: any[] = [];
    if (user?.cart) {
      const carts: ICart[] = user.cart;

      carts.forEach((cart: ICart) => {
        newArray.push(cart);
      });
    }

    newArray.push(cart);
    return JSON.stringify(newArray);
  }

  public async addProductToCart(token: string, cart: ICart, user: IUser) {
    const newCart = this.addItems(user, cart);

    const response = await axios.patch(
      `${path}/${user.id}`,
      { cart: newCart },
      this.setHeader(token)
    );
    return response.data;

  }
}
