import { Layout } from "./components/Layout";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <Layout>
      <ProductList />
      <ProductDetails />
    </Layout>
  );
}

export default App;
