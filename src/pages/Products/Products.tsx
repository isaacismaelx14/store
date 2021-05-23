import ProductItem, {
  IProducts,
} from "../../components/ProductItem/ProductItem";
import "./styles/products.scss";
const products: IProducts[] = [
  {
    id: 1,
    desc: "Lorem ipsum",
    price: 19.99,
    img: "https://om-beauty.com/wp-content/uploads/2015/11/product-img-1.jpg",
    seller: "Loss W",
    title: "Morden Watch",
  },
  {
    id: 2,
    desc: "Lorem ipsum",
    price: 19.99,
    img: "https://om-beauty.com/wp-content/uploads/2015/11/product-img-1.jpg",
    seller: "Loss W",
    title: "Morden Watch",
  },
  {
    id: 3,
    desc: "Lorem ipsum",
    price: 19.99,
    img: "https://om-beauty.com/wp-content/uploads/2015/11/product-img-1.jpg",
    seller: "Loss W",
    title: "Morden Watch",
  },
  {
    id: 4,
    desc: "Lorem ipsum",
    price: 19.99,
    img: "https://om-beauty.com/wp-content/uploads/2015/11/product-img-1.jpg",
    seller: "Loss W",
    title: "Morden Watch",
  },
];
export default function Products() {
  return (
    <section className="products">
      <div className="products__header">
        <div className="page_header__title">
          <span>Products</span>
        </div>
      </div>
      <div className="products__body">
        <div className="products__container">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
