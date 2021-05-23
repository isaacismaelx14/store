// import { useLocation } from "react-router";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/";

export default function Layout({ children }: any) {
  // const location = useLocation();

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
