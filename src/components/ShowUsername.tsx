import useAuth from "../auth/useAuth";
import { getName } from "../functions/getName";

interface IProps {
  showOnlyName?: boolean;
}

export default function ShowUsername({ showOnlyName }: IProps): JSX.Element {
  const { user } = useAuth();

  return <>{getName(user)}</>;
}
