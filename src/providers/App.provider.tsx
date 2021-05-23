import { createContext, useState } from "react";

export const AppContext = createContext<any>({});

export default function AppProvider({ children }: any) {
  const [products, setProducts] = useState<any>();
  const appData = {
    products,
    setProducts,
  };
  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
}
