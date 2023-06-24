import React from "react";
import "../App.css";

function Header() {
  return (
    <div id="header" className="lcars-row header">
      {/* <!-- ELBOW --> */}
      <div className="lcars-elbow left-bottom lcars-golden-tanoi-bg"></div>

      {/* <!-- BAR WITH TITLE --> */}
      <div className="lcars-bar horizontal">
        <div className="lcars-title right">LCARS</div>
      </div>

      {/* <!-- ROUNDED EDGE DECORATED --> */}
      <div className="lcars-bar horizontal right-end decorated"></div>
    </div>
  );
}

export default Header;
