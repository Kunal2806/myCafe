import { useState } from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  const [tableNo, setTableNo] = useState(0);

  // let data = { tableNo };
  // fetch("http://127.0.0.1:8787/book/add", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((Response) => {
  //     return Response.json();
  //   })
  //   .catch((error) => {
  //     console.error("error :", error);
  //   });

  let handleClick = (e: any) => {
    setTableNo(e.target.value);
    console.log("sdaf");
    console.log(tableNo);
  };

  return (
    <>
      <Link to="/welcome" />
      <div className="container">
        <div className="WelcomeContainer">
          <div className="WelcomeIntroText">
            <h1 className="WelcomeWelcome">Welcome to</h1>
            <h1 className="WelcomeName">my Cafe</h1>
            <h5 className="WelcomeLove">WE LOVE TO SERVE</h5>
          </div>
          <div className="WelcomeLogo">
            <img src="./image/logo.png" alt="logo" />
          </div>
          <div className="selectTableDiv">
            <div className="selectTableBorder">
              <div className="WelcomeSelectLine"></div>
              <p className="WelcomeSelectText">select</p>
              <div className="WelcomeSelectLine"></div>
            </div>
            <div className="selectTableNo">
              <select name="bookTable" id="bookTable">
                <option disabled value={0}>
                  table no.
                </option>
                <option value={1} onClick={handleClick}>
                  1
                </option>
                <option value={2} onClick={handleClick}>
                  2
                </option>
                <option value={3} onClick={handleClick}>
                  3
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
