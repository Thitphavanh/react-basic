import React from "react";
import Button from "react-bootstrap/Button";

export default function ButtonComponent({
  title,
  background,
  width,
  height,
  onClick,
}) {
  return (
    <div>
      <Button
        style={{
          background: background ? background : "black",
          width: width ? width : "100px",
          height: height ? height : "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   flexDirection:"column"
        }}
        onClick={onClick}
      >
        <div>{title}</div>
      </Button>
    </div>
  );
}
