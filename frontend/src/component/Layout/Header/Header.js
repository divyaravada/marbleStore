import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo3.png";

const options = {
  burgerColorHover: "#E69A8DFF",
  burgerColor: "#42EADDFF",
  logo,
  logoWidth: "20vmax",
  navColor1: "black",
  logoHoverSize: "10px",
  logoHoverColor: "#E69A8DFF",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#42EADDFF",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#E69A8DFF",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#42EADDFF",
  searchIconColor: "#42EADDFF",
  cartIconColor: "#42EADDFF",
  profileIconColorHover: "#E69A8DFF",
  searchIconColorHover: "#E69A8DFF",
  cartIconColorHover: "#E69A8DFF",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
