import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../Components/data";
import useGlobalContext from "./hooks";

const Sidebar = () => {
  const { isSidebarOpen, sidebarClose } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <h3>Logo</h3>
        <button className="close-btn" onClick={sidebarClose}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
