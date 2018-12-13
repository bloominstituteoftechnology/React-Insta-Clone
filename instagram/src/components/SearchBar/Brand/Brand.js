import React from "react";
import BrandLogo from "./BrandLogo";
import BrandTitle from "./BrandTitle";
import "./Brand.css";

const Brand = props => {
  return (
    <div className="brand">
      <BrandLogo />
      <BrandTitle />
    </div>
  );
};

export default Brand;
