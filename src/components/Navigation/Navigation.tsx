import "./styles/navigation.scss";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import NavLinks from "./components/NavLinks";
import { TiThMenu } from "react-icons/ti";
import SearchBar from "./components/SearchBar";
import HeaderTitle from "./components/HeaderTitle";

const NAME_APP = "Store";

export default function Navigation() {
  const mobileMenuRef = useRef<any>(null);
  const location = useLocation();

  const isMenuOpen = (): boolean => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return false;
    if (mobileMenu.classList.contains("hidden")) return false;
    else return true;
  };

  const menuTransition = (toDo: "open" | "close") => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;
    if (toDo === "open") {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.remove("visuallyhidden");
      }, 20);
    } else {
      mobileMenu.classList.add("visuallyhidden");
      mobileMenu.addEventListener(
        "transitionend",
        function () {
          mobileMenu.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
      setTimeout(() => {
        mobileMenu.removeEventListener("transitionend", () => {});
      }, 20);
    }
  };
  const swithMenu = () => {
    if (isMenuOpen()) {
      menuTransition("close");
    } else {
      menuTransition("open");
    }
  };

  const closeIfIsOpenMenu = useCallback(() => {
    if (isMenuOpen()) menuTransition("close");
  }, []);

  useEffect(() => {
    closeIfIsOpenMenu();
  }, [location, closeIfIsOpenMenu]);

  return (
    <div className="header" onClick={() => {}}>
      <div className="container header__container">
        <HeaderTitle nameApp={NAME_APP} className="mobile sm" />
        <div className="header__show-nav-button" onClick={swithMenu}>
          <TiThMenu />
          {/* <span>show</span> */}
        </div>
        <div className="nav__no-mobile header__nav">
          <NavLinks nameApp={NAME_APP} />
        </div>
      </div>
      <div className={`nav__mobile header__nav hidden`} ref={mobileMenuRef}>
        <NavLinks nameApp={NAME_APP} />
      </div>
      ) <SearchBar className="mobile" container />
    </div>
  );
}
