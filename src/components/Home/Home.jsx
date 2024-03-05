import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import Navbar from "../ui/Navbar";
import Content from "./Content";
import MetaData from "../ui/Metadata";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.data);

  useEffect(() => {
    if (!loggedIn) navigate("/login");
  }, [loggedIn]);
  return (
    loggedIn && (
      <div className="page-section">
        <MetaData title="Dashboard" />

        <Header />
        <Content />
        <Navbar />
      </div>
    )
  );
};

export default Home;
