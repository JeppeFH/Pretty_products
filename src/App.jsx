import Navigation from "./components/Navigation";
import { useRoutes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
