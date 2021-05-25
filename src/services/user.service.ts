import axios from "axios";
import { ILoginData, IUser } from "../auth/helpers/auth.helper";

export const user = null;
const path = "http://localhost:3001/users";

export default class UsersServices {
  public async login(userLoginData: ILoginData) {
    try {
      const user = await axios.post(`${path}/login`, userLoginData);
      return user.data;
    } catch (error) {
      console.log("object");
    }
  }

  public async getUserData(token: string): Promise<IUser> {
    const user = await axios.get(`${path}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return user.data;
  }

  public async setUserData(user: IUser): Promise<any> {
    const response = await axios.post(`${path}`, user);
    return response.data;
  }
}
