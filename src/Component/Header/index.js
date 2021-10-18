import React from "react"
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "lightgrey",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <h2>Instagram</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          listStyle: "none",
          gap: 20,
        }}
      >
        <Link to="/direct-message">
          <li>Direct Message</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Header
