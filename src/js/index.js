import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "bootstrap";
import "../styles/index.scss";

function SimpleCounter({ one, two, three, four, five, six }) {
	return (
		<div className="Counter">
			<div className="Timer">
				<i className="fas fa-clock"></i>
			</div>
			<div className="Sixth-dig">{six}</div>
			<div className="Fifth-dig">{five}</div>
			<div className="Fourth-dig">{four}</div>
			<div className="Third-dig">{three}</div>
			<div className="Second-dig">{two}</div>
			<div className="First-dig">{one}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	one: PropTypes.any,
	two: PropTypes.any,
	three: PropTypes.any,
	four: PropTypes.any,
	five: PropTypes.any,
	six: PropTypes.any
};
//render your react application
let c = 0;
setInterval(function() {
	let first = c % 10;
	let second = Math.floor(c / 10) % 10;
	let third = Math.floor(c / 100) % 10;
	let fourth = Math.floor(c / 1000) % 10;
	let fifth = Math.floor(c / 10000) % 10;
	let sixth = Math.floor(c / 100000) % 10;
	c++;
	ReactDOM.render(
		<SimpleCounter
			one={first}
			two={second}
			three={third}
			four={fourth}
			five={fifth}
			six={sixth}
		/>,
		document.querySelector("#app")
	);
}, 1000);
