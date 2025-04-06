"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container">
        <h1>This is about me</h1>
        <p>Hey I am good boy</p>

        <style jsx>
          {`
            .container {
              background-color: red;
              color: black;
            }
          `}
        </style>
      </div>
      <div className="container">Hey i a container</div>
    </div>
  );
};

export default page;
