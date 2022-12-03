import React from "react";
import EmailList from "../../components/emailList/EmailList";
import Footer from "../../components/footer/Footer";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperies/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Search by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes that guests appreciate</h1>
        <FeaturedProperties />
        <EmailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
