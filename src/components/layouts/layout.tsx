import Footer from "../Footer/Footer";
import Navigation from "../Navigation/";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
