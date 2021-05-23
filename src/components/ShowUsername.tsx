import { useCallback } from "react";
import useAuth from "../auth/useAuth";

interface IProps {
  showOnlyName?: boolean;
}

function upperCaseFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ShowUsername({ showOnlyName }: IProps): JSX.Element {
  const { user } = useAuth();

  const getName = useCallback(() => {
    const name = user?.names?.split(" ")[0];
    const lastName = user?.last_names?.split(" ")[0];
    const mayusName = upperCaseFirstLetter(name || "");
    const mayusLastName = upperCaseFirstLetter(lastName || "");
    if (showOnlyName) return mayusName;
    return `${mayusName} ${mayusLastName}`;
  }, [user, showOnlyName]);

  return <>{getName()}</>;
}
