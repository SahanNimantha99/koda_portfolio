import React from "react";
import Responsive from "./Responsive";

const Content = () => {
  return (
    <div className="relative bg-white flex flex-col justify-center items-center min-h-screen">
      <div className="p-4 md:p-8">
        <Responsive />
      </div>
    </div>
  );
};

export default Content;
