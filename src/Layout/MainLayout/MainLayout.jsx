import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
