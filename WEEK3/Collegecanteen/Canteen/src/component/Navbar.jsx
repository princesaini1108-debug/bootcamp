import React from 'react'
import link from "react-router-dom"

const Navbar = () => {
  return (
    <>
    
    <link to="/">logo</link>
    <link to="/home">Home</link>
    <link to="/about">About</link>
    <link to="/orders">Orders</link>
    <link to="/contact">Contact</link>
    <link to="/user">User</link>
    </>
  )
}

export default Navbar