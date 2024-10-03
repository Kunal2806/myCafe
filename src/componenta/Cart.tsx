import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Link to="/cart" />
      <div className="container">
        <div className="cartContainer">
          <div className="navCart">
            <button className="cartBack">
              <img src="./image/back.png" alt="back" />
            </button>
            Cart
          </div>

          <div className="foodDisplay">
            <div className="foodDisplayItem">
              <img src="./image/item1.png" alt="item" />
              <div className="foodDisplayItemDetail">Item Name</div>
              <div className="foodDisplayItemDetail">₹200</div>
            </div>
            <div className="foodDisplayItem">
              <img src="./image/item1.png" alt="item" />
              <div className="foodDisplayItemDetail">Item Name</div>
              <div className="foodDisplayItemDetail">₹200</div>
            </div>
            <div className="foodDisplayItem">
              <img src="./image/item1.png" alt="item" />
              <div className="foodDisplayItemDetail">Item Name</div>
              <div className="foodDisplayItemDetail">₹200</div>
            </div>
            <div className="foodDisplayItem">
              <img src="./image/item1.png" alt="item" />
              <div className="foodDisplayItemDetail">Item Name</div>
              <div className="foodDisplayItemDetail">₹200</div>
            </div>
            <div className="foodDisplayItem">
              <img src="./image/item1.png" alt="item" />
              <div className="foodDisplayItemDetail">Item Name</div>
              <div className="foodDisplayItemDetail">₹200</div>
            </div>
          </div>
          <div className="totalDiv">
            <div className="totalItem">2 items</div>
            <div className="totalPrice">
              <h4>Total</h4> <span>₹2000</span>
            </div>
            <button className="orderButton">Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
