// import LoadingPage from "./componenta/LoadingPage";

import Cart from "./componenta/Cart";

import WelcomePage from "./componenta/WelcomePage";

import HomePage from "./componenta/HomePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home/:tableNo" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
