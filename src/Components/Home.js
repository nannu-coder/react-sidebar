import React from "react";
import { FaBars } from "react-icons/fa";
import useGlobalContext from "./hooks";

const Home = () => {
  const { modalOpen, sidebarOpen } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={sidebarOpen}>
        <FaBars />
      </button>
      <button className="btn" onClick={modalOpen}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
