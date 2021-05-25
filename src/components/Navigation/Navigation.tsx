import "./styles/navigation.scss";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import NavLinks from "./components/NavLinks";
import { TiThMenu } from "react-icons/ti";
import SearchBar from "./components/SearchBar";
import HeaderTitle from "./components/HeaderTitle";
import { routes } from "../../helpers/routes.helper";

const NAME_APP = "Store";

export default function Navigation() {
  const mobileMenuRef = useRef<any>(null);
  const location = useLocation();
  const [actualLocation, setActualLocation] = useState<string | null>(null);
  const checKLocation =
    location.pathname === routes.login || location.pathname === routes.register;

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
        document.body.style.overflowY = "hidden";
        mobileMenu.classList.remove("visuallyhidden");
      }, 20);
    } else {
      mobileMenu.classList.add("visuallyhidden");
      mobileMenu.addEventListener(
        "transitionend",
        function () {
          mobileMenu.classList.add("hidden");
          document.body.style.overflowY = "auto";
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
    if (location.pathname !== actualLocation) {
      window.scrollTo(0, 0);
    }
    setActualLocation(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, closeIfIsOpenMenu]);

  return (
    <div className="header" id="header">
      <div className="container-fluid header__container">
        <HeaderTitle nameApp={NAME_APP} className="mobile sm" />
        <div className={`header__show-nav-button`} onClick={swithMenu}>
          <TiThMenu />
        </div>
        <div className="nav__no-mobile header__nav">
          <NavLinks nameApp={NAME_APP} />
        </div>
      </div>
      <div
        className={`nav__mobile header__nav hidden visuallyhidden`}
        ref={mobileMenuRef}
      >
        <NavLinks nameApp={NAME_APP} />
      </div>
      )
      <SearchBar
        className={`mobile`}
        container
        style={checKLocation ? { display: "none" } : {}}
      />
    </div>
  );
}
