export default function SearchBar({
  container: isContainer,
  className,
}: {
  container?: boolean;
  className?: string;
}) {
  return (
    <div className={`header__seach-area ${className || ""}`}>
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
