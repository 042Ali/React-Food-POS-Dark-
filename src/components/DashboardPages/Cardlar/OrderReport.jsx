export default function OrderReport() {
  return (
    <>
      <div className="Order__Report">
        <h1>Order Report</h1>
        <div className="Filter__Order__card">
          <div className="Filter__Order">
            <div>
              <img src="./Filter.png" alt="" />
            </div>
            <h2>Filter Order</h2>
          </div>
        </div>
        <ul>
          <li>Customer</li>
          <li>Menu</li>
          <li>Total Payment</li>
          <li>Status</li>
        </ul>
        <div className="newhr"></div>
        <div className="Profile__Name">
          <span>Eren Jaegar</span>
          <span>Reiner Braunn</span>
          <span>Levi Ackerman</span>
          <span>Historia Reiss</span>
        </div>

        <div className="Avatar_Image">
          <div>
            <img className="Avatar__Profile" src="./AvatarImg/Avatar1.png" />
          </div>
          <div>
            <img className="Avatar__Profile" src="./AvatarImg/Avatar2.png" />
          </div>
          <div>
            <img className="Avatar__Profile" src="./AvatarImg/Avatar3.png" />
          </div>
          <div>
            <img className="Avatar__Profile" src="./AvatarImg/Avatar4.png" />
          </div>
        </div>
        {/*  */}
        <div className="Profile__Food">
          <div>
            <div className="Profile__Food--Name1">
              <p>
                Spicy seasoned <br /> seafood noodles
              </p>
            </div>
            <div className="Profile__Food--Name2">
              <p>
                Salted Pasta with <br /> mushroom sauce
              </p>
            </div>
            <div className="Profile__Food--Name3">
              <p>
                Beef dumpling in hot <br /> and sour soup
              </p>
            </div>
            <div className="Profile__Food--Name4">
              <p>
                Hot spicy fried rice <br /> with omelet
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="Profile__Money">
          <a>$125</a>
          <a>$145</a>
          <a>$105</a>
          <a>$45</a>
        </div>
        <div className="Profile__Button">
          <button style={{ color: "#50d1aa" }}>Completed</button>
          <button style={{ backgroundColor: "#363455", color: "#9290fe" }}>
            Preparing
          </button>
          <button style={{ backgroundColor: "#4c3b39", color: "#ffb572" }}>
            Pending
          </button>
          <button style={{ color: "#50d1aa" }}>Completed</button>
        </div>
      </div>
    </>
  );
}
