import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProducts } from "../../components/ProductItem/ProductItem";
import useAppData from "../../hooks/useAppData";
import "./styles/product.scss";

export default function Product() {
  const [product, setProduct] = useState<IProducts | null>();
  const { products } = useAppData();
  const { id } = useParams<any>();

  useEffect(() => {
    setProduct(products[id - 1]);
  }, [id, products]);

  return (
    <section className="product-desc">
      <div className="product__container">
        <div className="product__title mobile">
          <span>{product?.title}</span>
        </div>

        <div className="produt__img">
          <img src={product?.img} alt={product?.title} />
        </div>

        <div className="product__description">
          <div className="product__title no-mobile">
            <h2>{product?.title}</h2>
          </div>
          <hr />
          <div className="product__info">{product?.desc}</div>
        </div>

        <div className="product__price">
          <span>${product?.price}</span>
          <button>Add to cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </section>
  );
}
