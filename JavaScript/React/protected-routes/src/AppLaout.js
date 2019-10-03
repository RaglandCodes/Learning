import React from "react";
import auth from "./auth";

export const AppLayout = props => {
  return (
    <div>
      <h1>AppLayout</h1>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
