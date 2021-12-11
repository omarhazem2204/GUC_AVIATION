import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import Update from "./components/Update"
import Search from "./components/searchFlight"
import SearchData from "./components/searchData"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="admin" exact element={<Admin />} />
      <Route path="admin/update/:id" exact element={<Update />} />
      <Route path="search" exact element={<Search />} />
      <Route path="searchData" exact element={<SearchData />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);