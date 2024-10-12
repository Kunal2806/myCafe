import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  let { tableNo } = useParams();
  const [table, setTableNo] = useState(tableNo);
  // const [array, setArray] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(" http://127.0.0.1:8787/get");
  //       const data = await response.json();
  //       setArray(data);
  //     } catch (error) {
  //       console.error("fetch Error : ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // function handleSelect(e: any) {
  //   console.log(e.target.value);
  // }
  // console.log("hello");

  const handleClick = (e: any) => {
    setTableNo(e.target.value);
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: "#FCDCD4" }}>
        <div className="homeContainer">
          <div className="nav">
            <img className="navImg" src="/image/logo.png" alt="logo" />
            <div className="navSelectBox">
              <select
                name="bookTable"
                id="bookTable"
                defaultValue={tableNo}
                onChange={handleClick}
                style={{
                  color: "black",
                  appearance: "none",
                  width: "110px",
                  height: "40px",
                  fontSize: "22px",
                  backgroundColor: "#FE724C",
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <img className="navImg" src="/image/cart.png" alt="cart" />
          </div>
          <div className="homeText1">WE LOVE TO SERVE</div>
          <div className="homeText2">What would you like to order</div>
          <div className="foodOption">
            <div className="foodShow">
              <img src="/image/burger.png" alt="burger" />
              <h4>Burger</h4>
            </div>
            <div className="foodShowOther">
              <img src="/image/pizza.png" alt="pizza" />
              <h4>Pizza</h4>
            </div>
          </div>
          <div className="foodDisplay">
            {/* {array.map((post: any) => ( */}
            <div className="foodDisplayItem">
              <img src="\food\burger\blackbean.jpeg" alt="item" />
              <div className="foodDisplayItemDetail">fdsagasfdg</div>
              <div className="foodDisplayItemDetail">asgasfdg</div>
            </div>
            <div className="foodDisplayItem">
              <img src="\food\burger\blackbean.jpeg" alt="item" />
              <div className="foodDisplayItemDetail">fdsagasfdg</div>
              <div className="foodDisplayItemDetail">asgasfdg</div>
            </div>
            <div className="foodDisplayItem">
              <img src="\food\burger\blackbean.jpeg" alt="item" />
              <div className="foodDisplayItemDetail">fdsagasfdg</div>
              <div className="foodDisplayItemDetail">asgasfdg</div>
            </div>
            <div className="foodDisplayItem">
              <img src="\food\burger\blackbean.jpeg" alt="item" />
              <div className="foodDisplayItemDetail">fdsagasfdg</div>
              <div className="foodDisplayItemDetail">asgasfdg</div>
            </div>
            <div className="foodDisplayItem">
              <img src="\food\burger\blackbean.jpeg" alt="item" />
              <div className="foodDisplayItemDetail">fdsagasfdg</div>
              <div className="foodDisplayItemDetail">asgasfdg</div>
            </div>
            <div className="foodDisplayItem">
              <img src="\food\burger\blackbean.jpeg" alt="item" />
              <div className="foodDisplayItemDetail">fdsagasfdg</div>
              <div className="foodDisplayItemDetail">asgasfdg</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
