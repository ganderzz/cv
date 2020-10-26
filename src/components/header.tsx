import * as React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

interface IProps {
  name: string;
}

export function Header({ name = "" }: IProps) {
  return (
    <header
      className="header text-white"
      style={{
        padding: "1rem",
        position: "relative",
        zIndex: 500,
      }}
    >
      <Logo title={name} />
    </header>
  );
}
