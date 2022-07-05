import "./App.css";
import ProductCard from "./Components/productCard";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}>
      <ProductCard id={12356} />
      <ProductCard id={1111} />
      <ProductCard id={1111} />
      <ProductCard id={1111} />
      <ProductCard id={12356} />
    </div>
  );
}

export default App;
