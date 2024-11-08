import { Button } from "@mui/material";
import MenuButton from "../MenuButton/MenuButton";
import { useStore } from "../../useStore";

export default function MenuPayment() {
  const selectedProducts = useStore((state) => state.selectedProducts);
  const removeProduct = useStore((state) => state.removeProduct); // Get the removeProduct function from the store

  let total = 0;
  for (let i = 0; i < selectedProducts.length; i++) {
    total += selectedProducts[i].price * selectedProducts[i].quantity;
  }

  return (
    <>
      <div className="MenuPayment">
        <h1
          style={{
            color: "#fff",
            padding: "24px",
          }}
        >
          Orders #34562
        </h1>
        <div style={{ padding: "24px" }}>
          <Button
            style={{
              backgroundColor: "#ea7c69",
              borderRadius: "12px",
              width: "90px",
              height: "40px",
            }}
            variant="contained"
          >
            Dine In
          </Button>

          <Button
            style={{
              color: "#ea7c69",
              borderRadius: "12px",
              border: "1px solid #393c49",
              height: "40px",
              marginLeft: "10px",
            }}
            variant="outlined"
          >
            To Go
          </Button>
          <Button
            style={{
              color: "#ea7c69",
              borderRadius: "12px",
              border: "1px solid #393c49",
              height: "40px",
              marginLeft: "10px",
            }}
            variant="outlined"
          >
            Delivery
          </Button>
        </div>
        {selectedProducts.length > 0 && (
          <div className="MenuPayment__Container">
            <div className="MenuPayment__Items">
              {selectedProducts.map((product) => (
                <div key={product.id} className="MenuPayment__Item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="MenuPayment__Img"
                  />
                  <div className="MenuPayment__Price">
                    <p style={{ marginTop: "-60px" }}>{product.name}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <Button
                      onClick={() => removeProduct(product.id)}
                      style={{
                        color: "#ea7c69",
                        border: "1px solid #ea7c69",
                        borderRadius: "12px",
                        marginTop: "10px",
                        padding: "5px 10px",
                      }}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <h3 style={{ marginTop: "10px" }}>Total: ${total.toFixed(2)}</h3>
            <MenuButton />
          </div>
        )}
      </div>
    </>
  );
}
