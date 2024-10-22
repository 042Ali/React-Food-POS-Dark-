import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./Menu.css";
import axios from "axios";
import MenuPayment from "./MenuPayment";

export default function Menu() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Məlumat yüklənərkən xəta baş verdi.");
        setLoading(false);
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
          label="Search for food, coffe, etc.."
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
          {products.map((db) => (
            <div className="product" key={db.id}>
              <img className="product__img" src={db.image} alt="" />
              <h3 className="product__h3">{db.name}</h3>
              <p style={{ marginTop: "5px " }}>{db.price}</p>
            </div>
          ))}
        </div>
      </div>
      <MenuPayment />
    </>
  );
}
