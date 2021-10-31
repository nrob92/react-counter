//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(function() {
	const intervalSix = Math.floor(counter / 10000);
	const intervalFive = Math.floor(counter / 1000);
	const intervalFour = Math.floor(counter / 1000);
	const intervalThree = Math.floor(counter / 100);
	const intervalTwo = Math.floor(counter / 10);
	const intervalOne = Math.floor(counter / 1);

	counter++;
	ReactDOM.render(
		<Home
			sixth={intervalSix}
			fifth={intervalFive}
			fourth={intervalFour}
			third={intervalThree}
			second={intervalTwo}
			first={intervalOne}
		/>,
		document.getElementById("app")
	);
}, 1000);
