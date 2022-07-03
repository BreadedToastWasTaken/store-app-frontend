import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Popular from "./routes/popular";
import Categories from "./routes/categories";
import Item from "./routes/item";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="popular" element={<Popular />} />
        <Route path="categories" element={<Categories />} />
        <Route path="item/:itemid" element={<Item />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>O_O Whatre You Doing Looking Here</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
