import React, { useContext } from "react";
import { UserContext } from "../../userContext";

export default function Homepage() {
  const welcome = useContext(UserContext);
  return <div>{welcome}</div>;
}
