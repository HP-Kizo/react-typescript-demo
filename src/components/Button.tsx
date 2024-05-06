import React from "react";
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
// const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   console.log("Button clicked!");
// };

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click me</button>
  );
};
