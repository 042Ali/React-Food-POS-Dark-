import CardPages from "../Cardlar/CardPages";

export default function ProductsManagement() {
  return (
    <>
      <div className="Products__Management">
        <h1>Products Management</h1>

        <div className="Filter__Setting__card">
          <div className="Filter__Setting">
            <div>
              <img src="./Filter.png" alt="" />
            </div>
            <h2>Manage Categories</h2>
          </div>
        </div>
        <ul className="Hot__Dishes">
          <li style={{ color: "#d87261" }}>Hot Dishes</li>

          <li>Cold Dishes</li>
          <li>Soup</li>
          <li>Grill</li>
          <li>Appetizer</li>
          <li>Dessert</li>
        </ul>
        <div className="Newhr3"></div>
        <div className="Newhr4"></div>

        <div style={{ display: "flex" }}>
          <div className="add-dish-card">
            <div>
              <div className="plus-icon">+</div>
              <div>Add new dish</div>
            </div>
          </div>
          <CardPages />
        </div>
      </div>
    </>
  );
}
