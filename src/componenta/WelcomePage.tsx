import { Link } from "react-router-dom";

function WelcomePage() {
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
                <option disabled>table no.</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
