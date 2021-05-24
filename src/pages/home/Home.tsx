import "./styles/home.scss";
import { FaArrowAltCircleDown } from "react-icons/fa";
import ProductItem, {
  IProducts,
} from "../../components/ProductItem/ProductItem";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import useAppData from "../../hooks/useAppData";
import useAuth from "../../auth/useAuth";
import ShowUsername from "../../components/ShowUsername";
import { useEffect } from "react";

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
    desc: "Camera for profecionals photos",
    price: 649.99,
    img: "https://static.bhphoto.com/images/images2500x2500/1410738822_1081856.jpg",
    seller: "Samsung",
    title: "Samsung Galaxy NX",
  },
  {
    id: 3,
    desc: "Camera for profecionals photos",
    price: 649.99,
    img: "https://static.bhphoto.com/images/images2500x2500/1410738822_1081856.jpg",
    seller: "Samsung",
    title: "Samsung Galaxy NX",
  },
  {
    id: 4,
    desc: "Camera for profecionals photos",
    price: 649.99,
    img: "https://static.bhphoto.com/images/images2500x2500/1410738822_1081856.jpg",
    seller: "Samsung",
    title: "Samsung Galaxy NX",
  },
];

const Categories = [
  "Phones",
  "Cameras",
  "Clothe",
  "Accesories",
  "Rent car area full tuning 4k",
  "Food",
  "Home",
  "Sport",
  "Games",
];

export default function Home() {
  const { setProducts } = useAppData();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    setProducts(products);
  }, [setProducts]);

  return (
    <>
      <section className="home">
        <div className="home__header mobile">
          <div className="header__bg"></div>
          <div className="header__bg-color"></div>
          <div className="home__header-tite ">
            {isLoggedIn ? (
              <span>
                Welcome <ShowUsername /> to the store
              </span>
            ) : (
              <span>Welcome to the store</span>
            )}
          </div>
        </div>
        <div className="home__header no-mobile">
          <div className="header__bg"></div>
          <div className="header__bg-color"></div>
          <div className="home__header-tite ">
            {isLoggedIn ? (
              <span>
                Welcome <ShowUsername showOnlyName /> to the store
              </span>
            ) : (
              <span>Welcome to the store</span>
            )}
          </div>
        </div>
        <div className="home__container">
          <div className="home__container-header sticky-title">
            <div className="home__container-triangle">
              <div className="triangle__container">
                <div className="triangle"></div>
              </div>
            </div>

            <div className="home__container-offer__title">
              <div className="offer__title-container  sticky-title">
                <FaArrowAltCircleDown className="mobile" />
                <span className="title">OFFERS</span>
                <FaArrowAltCircleDown className="" />
              </div>
            </div>
          </div>

          <div className="home__products-container">
            <div className="products__group">
              {/* Start Item */}
              {products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
              {/* Finis item */}
            </div>
          </div>

          <div className="home__categories">
            <div className="categories__header sticky-title ">
              {" "}
              <FaArrowAltCircleDown className="mobile" />
              <span className="title">Categories</span>
              <FaArrowAltCircleDown className="" />
            </div>
            <div className="categories__body">
              {Categories.map((category) => (
                <>
                  <CategoryItem category={category} />
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
