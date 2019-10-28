import React, { Component } from "react";

import "./sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <aside className="aside">
        <div className="sidebar-wrapper d-none">
          <div className="user-profile">

          </div>
          <div className="menu-wrapper">
            <ul>
              <li className="menu-item">
                <span>Home</span>
              </li>
              <li className="menu-item">
                <span>Add City</span>
              </li>
              <li className="menu-item">
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
