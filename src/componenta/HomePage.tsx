function HomePage() {
  return (
    <div className="container">
      <div className="homeContainer">
        <div className="homeIntroText">
          <h1 className="homeWelcome">Welcome to</h1>
          <h1 className="homeName">my Cafe</h1>
          <h5 className="homeLove">WE LOVE TO SERVE</h5>
        </div>
        <div className="homeLogo">
          <img src="./image/logo.png" alt="logo" />
        </div>
        <div className="selectTableDiv">
          <div className="selectTableBorder">
            <div className="homeSelectLine"></div>
            <p className="homeSelectText">select</p>
            <div className="homeSelectLine"></div>
          </div>
          <div className="selectTableNo">
            <select name="bookTable" id="bookTable">
              <option selected disabled>
                table no.
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
