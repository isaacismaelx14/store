import "./styles/category.scss";

interface IProps {
  category: string;
}
export default function CategoryItem({ category }: IProps) {
  return (
    <div className="categories__container">
      <div className="category__item">
        <span>{category}</span>
      </div>
    </div>
  );
}
