import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Cart() {
  const [array, setArray] = useState([]);
  const [Barray, setBArray] = useState([]);

  const { count, price } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          " https://mycafeapi.kunalgoswami-2806.workers.dev/menu"
        );
        const data = await response.json();
        setArray(data);
      } catch (error) {
        console.error("fetch Error : ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          " https://mycafeapi.kunalgoswami-2806.workers.dev/book"
        );
        const data = await response.json();
        setBArray(data);
      } catch (error) {
        console.error("fetch Error : ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="cartContainer">
          <div className="navCart">
            <button className="cartBack">
              <img src="./image/back.png" alt="back" />
            </button>
            Cart
          </div>
          <div className="foodDisplay">
            {array.map((post: any) =>
              Barray.map(
                (bpost: any, index) =>
                  post.id === bpost.item_id && (
                    <div className="foodDisplayItem" key={index}>
                      <div className="itemImageDiv">
                        <img className="itemImage" src={post.img} alt="item" />
                      </div>
                      <div className="foodDisplayItemDetail">{post.name}</div>
                      <div className="foodDisplayItemDetail">₹{post.price}</div>
                    </div>
                  )
              )
            )}
          </div>

          <div className="totalDiv">
            <div className="totalItem">{count}items</div>
            <div className="totalPrice">
              <h4>Total</h4> <span>₹{price}</span>
            </div>
            <button className="orderButton">Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
