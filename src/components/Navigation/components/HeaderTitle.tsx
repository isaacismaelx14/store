import { Link } from "react-router-dom";

interface IProps {
  nameApp: string;
  className?: string;
}

export default function HeaderTitle({ nameApp, className }: IProps) {
  return (
    <div className={`header__title ${className || ""}`}>
      <Link to="/" className="header__title-nameapp" children={nameApp} />
    </div>
  );
}
