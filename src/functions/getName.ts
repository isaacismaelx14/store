import { IUser } from "../auth/helpers/auth.helper";

function upperCaseFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getName = (
  user: IUser | null,
  showOnlyName: boolean = false
): string => {
  const name = user?.names?.split(" ")[0].toLocaleLowerCase();
  const lastName = user?.last_names?.split(" ")[0];
  const mayusName = upperCaseFirstLetter(name || "");
  const mayusLastName = upperCaseFirstLetter(lastName || "");
  if (showOnlyName) return mayusName;
  return `${mayusName} ${mayusLastName}`;
};
