"use client";

import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { store } from "../redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <Provider store={store}>{children}</Provider>
    </CookiesProvider>
  );
}
