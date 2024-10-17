import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  let { tableNo } = useParams();
  const [load, setLoad] = useState(false);
  const [selectType, setSelectType] = useState({
    burger: "foodShow",
    Pizza: "foodShowOther",
  });
  const [Type, setType] = useState("burger");
  const [table, setTableNo] = useState(Number(tableNo));
  const [array, setArray] = useState([]);
  const [bookId, setBookId] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const data = {
    table_no: table,
    item_id: bookId,
  };

  useEffect(() => {
    setLoad(true);
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
    setLoad(false);
    fetchData();
  }, [table]);

  const handleClick = (e: any) => {
    setTableNo(Number(e.target.value));
  };

  function handleSelect(divName: string, className: string) {
    setSelectType({
      burger: "foodShowOther",
      Pizza: "foodShowOther",
    });
    setSelectType((prevClassName) => ({
      ...prevClassName,
      [divName]: className,
    }));
    setType(divName);
  }
  const handleItemId = (id: number, prc: number) => {
    setBookId(id);
    setCount(count + 1);
    setPrice(price + prc);
  };

  useEffect(() => {
    if (bookId !== 0) {
      const addPost = async () => {
        try {
          const response = await fetch(
            "https://mycafeapi.kunalgoswami-2806.workers.dev/book/add",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          if (response.ok) {
            return response.json;
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      addPost();
    } else {
      console.log("not");
    }
  }, [count]);

  return (
    <>
      <div className="container" style={{ backgroundColor: "#FCDCD4" }}>
        <div className="homeContainer">
          <div className="nav">
            <img className="navImg" src="./image/logo.png" alt="logo" />
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
            <Link to={`/cart/${count}/${price}`}>
              <img className="navImg" src="./image/cart.png" alt="cart" />
            </Link>
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
              <img src="./image/burger.png" alt="burger" />
              <h4>Burger</h4>
            </div>
            <div
              className={selectType.Pizza}
              onClick={() => {
                handleSelect("Pizza", "foodShow");
              }}
            >
              <img src="./image/pizza.png" alt="pizza" />
              <h4>Pizza</h4>
            </div>
          </div>
          <div className="foodDisplay">
            {load && (
              <div className="loading">
                <div className="loadingDots"></div>
                <div className="loadingDots"></div>
                <div className="loadingDots"></div>
              </div>
            )}
            {array.map(
              (post: any, index) =>
                post.Type === Type && (
                  <div className="foodDisplayItem" key={index}>
                    <div className="itemImageDiv">
                      <img
                        className="addItem"
                        src="./image/add.png"
                        alt="+"
                        onClick={() => {
                          handleItemId(post.id, post.price);
                        }}
                      />
                      <img className="itemImage" src={post.img} alt="item" />
                    </div>
                    <div className="foodDisplayItemDetail">{post.name}</div>
                    <div className="foodDisplayItemDetail">₹{post.price}</div>
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
