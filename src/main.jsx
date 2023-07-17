import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  fetchProductCategories,
  fetchProducts,
} from "./features/products/productSlice.jsx";
import {
  fetchCartsPrice,
  fetchCartsProducts,
} from "./features/carts/cartSlice.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { OauthClientId, OauthDomain } from "./assets/Oauth/Credentials.jsx";

store.dispatch(fetchProductCategories());
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={OauthDomain}
    clientId={OauthClientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
