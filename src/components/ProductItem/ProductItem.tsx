import "./styles/products_item.scss";

export interface IProducts {
  id: number;
  title: string;
  img: string;
  desc: string;
  price: number;
  seller: string;
}

interface IProps {
  product: IProducts;
}
export default function ProductItem({ product }: IProps) {
  const { desc, img, price, seller, title } = product;
  return (
    <div className="product__item">
      <div className="product__header">
        <div className="product__img">
          <img src={img} alt={title} />
        </div>
        <div className="product__title">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="product__body">
        <div className="product__desc">
          <span>{desc}</span>
        </div>
        <div className="product__price">
          <span>${price}</span>
        </div>
      </div>
      <div className="product__footer">
        <div className="product__seller">
          <span>
            Seller by: <a href="#s">{seller}</a>
          </span>
        </div>
      </div>
    </div>
  );
}
