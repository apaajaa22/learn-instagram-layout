import React from "react"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        background: "lightgrey",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
          paddingTop: 10,
          paddingBottom: 10,
          textDecoration: "none",
        }}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  )
}

export default Footer
