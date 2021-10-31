import PropTypes from "prop-types";
import React from "react";

function Home({ props }) {
	return (
		<div className="counter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div>{props.sixth % 10}</div>
			<div>{props.fifth % 10}</div>
			<div>{props.fourth % 10}</div>
			<div>{props.third % 10}fgwg</div>
			<div>{props.second % 10}</div>
			<div>{props.first % 10}</div>
		</div>
	);
}

App.propTypes = {
	sixth: PropTypes.number,
	fifth: PropTypes.number,
	fourth: PropTypes.number,
	third: PropTypes.number,
	second: PropTypes.number,
	first: PropTypes.number
};
export default Home;
