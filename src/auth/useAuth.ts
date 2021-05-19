import { useContext } from "react";
import { AuthContext } from "./Auht.provider";
import { IAuthContext } from "./helpers/auth.helper";

export default function useAuth():IAuthContext {
   return useContext<IAuthContext>(AuthContext)
}
