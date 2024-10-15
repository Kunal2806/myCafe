import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  let { tableNo } = useParams();
  const [selectType, setSelectType] = useState({
    burger: "foodShow",
    Pizza: "foodShowOther",
  });
  const [Type, setType] = useState("burger");
  const [table, setTableNo] = useState(Number(tableNo));
  const [array, setArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(" http://127.0.0.1:8787/menu");
        const data = await response.json();
        setArray(data);
        console.log("worked");
      } catch (error) {
        console.error("fetch Error : ", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (e: any) => {
    setTableNo(Number(e.target.value));
  };

  function handleSelect(divName: string, className: string) {
    setSelectType((prevClassName) => ({
      ...prevClassName,
      [divName]: className,
    }));
    setType(divName);
  }
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
                defaultValue={table}
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
            <div
              className={selectType.burger}
              onClick={() => {
                handleSelect("burger", "foodShow");
              }}
            >
              <img src="/image/burger.png" alt="burger" />
              <h4>Burger</h4>
            </div>
            <div
              className={selectType.Pizza}
              onClick={() => {
                handleSelect("Pizza", "foodShow");
              }}
            >
              <img src="/image/pizza.png" alt="pizza" />
              <h4>Pizza</h4>
            </div>
          </div>
          <div className="foodDisplay">
            {array.map(
              (post: any) =>
                post.Type === Type && (
                  <div className="foodDisplayItem" key={post.id}>
                    <img src={post.img} alt="item" />
                    <div className="foodDisplayItemDetail">{post.name}</div>
                    <div className="foodDisplayItemDetail">{post.price}</div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
