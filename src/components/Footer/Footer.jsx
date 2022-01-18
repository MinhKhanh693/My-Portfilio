import React, { Fragment } from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <Fragment>
      <footer>
        <span>
          Created By <a href="https://www.codingnepalweb.com">MinhKhanh</a> |{" "}
          <span className="far fa-copyright"></span> 2022 All rights reserved.
        </span>
      </footer>
    </Fragment>
  );
}
