import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductsContext";
import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products";
import configureStore from "./hook-store/product-store";
configureStore();
// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider store={store}>
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsProvider>
  // </Provider>
  document.getElementById("root")
);
