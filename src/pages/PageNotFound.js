import React from "react";
import { auth } from "../services/auth";

const PageNotFound = (props) => {
  return (
    <p>
      404 NOT FOUND{" "}
      <span>
        <button
          onClick={() =>
            auth() ? props.history.push("/overview") : props.history.push("/")
          }
        >
          {auth() ? "Back to Home" : "Back to Login"}
        </button>
      </span>
    </p>
  );
};

export default PageNotFound;
