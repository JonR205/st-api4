import "../App.css"
import React from "react"

function Footer() {
    return (
        <div id="footer" className="lcars-row ">
			{/* <!-- ELBOW --> */}
			<div className="lcars-elbow left-top lcars-golden-tanoi-bg"></div>
			{/* <!-- BAR --> */}
			<div className="lcars-bar horizontal both-divider bottom"></div>
			{/* <!-- ROUNDED EDGE --> */}
			<div className="lcars-bar horizontal right-end left-divider bottom"></div>
		</div>
    )
}

export default Footer