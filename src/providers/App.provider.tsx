import { createContext, useState } from "react";
import { ISellerRequest } from "../services/request.service";

interface IAppProvider {
  products: any;
  setProducts: any;
  sellerReq: ISellerRequest | null;
  setSellerReq: any;
}

export const AppContext = createContext<IAppProvider>({
  products: null,
  setProducts: () => console.error("not register"),
  sellerReq: null,
  setSellerReq: () => console.error("not register"),
});

export default function AppProvider({ children }: any) {
  const [products, setProducts] = useState<any>();
  const [sellerReq, setSellerReq] = useState<ISellerRequest | null>(null);
  const appData: IAppProvider = {
    products,
    setProducts,
    sellerReq,
    setSellerReq,
  };
  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
}
