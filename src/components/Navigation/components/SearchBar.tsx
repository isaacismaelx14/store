import { CSSProperties } from "react";

export default function SearchBar({
  container: isContainer,
  className,
  style,
}: {
  container?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`header__seach-area ${className || ""}`} style={style}>
      {isContainer ? <div className="container" children={<Bar />} /> : <Bar />}
    </div>
  );
}

const Bar = () => (
  <>
    <input type="text" className="input__search" placeholder="Search" />
    <button>Search</button>
  </>
);
