import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import MenuPayment from "./MenuPayment";
import axios from "axios";
import { useStore } from "../../useStore";

import "./Menu.css";

export default function Menu() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const addProduct = useStore((state) => state.addProduct);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        setError("Məlumat yüklənərkən xəta baş verdi.");
      });
  }, []);

  return (
    <>
      <div className="Menu__Container">
        <h1>Jaegar Resto</h1>
        <p>Tuesday, 2 Feb 2021</p>
        <TextField
          style={{
            backgroundColor: "#ff22",
            borderRadius: "12px",
            marginLeft: "800px",
            marginTop: "-100px",
          }}
          id="filled-search"
          label="Search for food, coffee, etc.."
          type="search"
          variant="filled"
        />
        <menu>
          <li style={{ color: "#d87261" }}>Cold Dishes</li>
          <li>Hot Dishes</li>
          <li>Soup</li>
          <li>Grill</li>
          <li>Appetizer</li>
          <li>Dessert</li>
        </menu>
        <hr />
        <h2>Choose Dishes</h2>

        <div className="product__grid">
          {products.map((product) => (
            <div
              className="product"
              key={product.id}
              onClick={() => addProduct(product)}
            >
              <img className="product__img" src={product.image} alt="" />
              <h3 className="product__h3">{product.name}</h3>
              <p style={{ marginTop: "5px" }}>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <MenuPayment />
    </>
  );
}
