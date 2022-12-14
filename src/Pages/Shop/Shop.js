import React from "react";
import { UserContext } from "../../userContext";
import { useContext } from "react";
export default function Shop() {
  const welcome = useContext(UserContext);
  return (
    <div>
      return <div>{welcome}</div>;
    </div>
  );
}
