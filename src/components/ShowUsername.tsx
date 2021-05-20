import { useCallback } from "react";
import useAuth from "../auth/useAuth";

function upperCaseFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ShowUsername(): JSX.Element {
  const { user } = useAuth();

  const getName = useCallback(() => {
    const name = user?.names?.split(" ")[0];
    const lastName = user?.last_names?.split(" ")[0];
    const mayusName = upperCaseFirstLetter(name || "");
    const mayusLastName = upperCaseFirstLetter(lastName || "");
    return `${mayusName} ${mayusLastName}`;
  }, [user]);

  return <>{getName()}</>;
}
