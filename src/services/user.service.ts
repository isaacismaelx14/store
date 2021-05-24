import axios from "axios";
import { ILoginData, IUser } from "../auth/helpers/auth.helper";

export const user = null;
const path = "http://localhost:3001/users";

export default class UsersServices {
  public async login(userLoginData: ILoginData) {
    const user = await axios.post(`${path}/login`, userLoginData);
    return user.data;
  }

  public async getUserData(token: string): Promise<IUser> {
    const user = await axios.get(`${path}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return user.data;
  }
}
