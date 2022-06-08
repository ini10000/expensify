import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navigation from "./component/routes/navigation-menu/navigation.component";
// import Food from "./component/routes/links/food.links";
// import Books from "./component/routes/links/books.links";
// import { CgArrowLongDown } from "react-/all";
// import Clothes from "./component/routes/links/clothes.links";
// import Gadget from "./component/routes/links/gadget.links";
// import Description from "./component/routes/description/description";
// import MainBox from "./component/Mainbox/mainbox.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          {/* <Route path={"food"} element={<Food />} />
          <Route path={"books"} element={<Books />} />
          <Route path={"clothes"} element={<Clothes />} />
          <Route path={"gadgets"} element={<Gadget />} /> */}
          {/* <Route index element={<Navigation />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
