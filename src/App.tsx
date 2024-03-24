import { Route, Router } from "lucide-react";
import Header from "./Component/header";
import Home from "./Component/home";
import Product from "./Component/product";

function App() {
  return (
    <>
      {/* <Router>
        <Route />
        <Route />
        <Route />
      </Router> */}

      <Header />
      <Home />
      <Product />
    </>
  );
}

export default App;
