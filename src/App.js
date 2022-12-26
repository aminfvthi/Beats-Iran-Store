import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar, Footer } from "./components";
import {
  Home,
  Profile,
  Login,
  SignUp,
  Products,
  Headphones,
  Earphones,
  Speakers,
  Accessories,
} from "./pages";

const App = () => {
  console.log("App");

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="products" element={<Products />}>
              <Route path="headphones" element={<Headphones />} />
              <Route path="earphones" element={<Earphones />} />
              <Route path="speakers" element={<Speakers />} />
              <Route path="accessories" element={<Accessories />} />
            </Route>
          </Routes>
        </main>
        <footer className="bg-dark mt-5">
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
