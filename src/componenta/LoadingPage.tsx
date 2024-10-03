import { Link } from "react-router-dom";

function LoadingPage() {
  return (
    <>
      <Link to="/" />
      <div className="container">
        <div className="introContainer">
          <div className="intro">
            <span>
              my
              <div className="introImg">
                <img src="./image/logo.png" alt="logo" />
              </div>
            </span>
            <span>CAFE</span>
          </div>
          <div className="loading">
            <div className="loadingDots"></div>
            <div className="loadingDots"></div>
            <div className="loadingDots"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
