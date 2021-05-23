import { useContext } from "react";
import { AppContext } from "../providers/App.provider";

export default function useAppData() {
  return useContext(AppContext);
}
