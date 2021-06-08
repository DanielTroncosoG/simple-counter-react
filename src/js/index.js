import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "bootstrap";
import "../styles/index.scss";

function SimpleCounter({props}) {
	return (
		<div className="Counter">
			<div className="Timer">
				<i className="fas fa-clock"></i>
			</div>
			<div className="Sixth-digit">{props.six}</div>
			<div className="Fifth-digit">{props.five}</div>
			<div className="Fourth-digit">{props.four}</div>
			<div className="Third-digit">{props.three}</div>
			<div className="Second-digit">{props.two}</div>
			<div className="First-digit">{props.one}</div>
		</div>
	);
}
SimpleCounter.PropTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
	five: PropTypes.number,
	six: PropTypes.number
};
//render your react application
let c = 0;
setInterval(function() {
	const first = c % 10;
	const second = Math.floor(c / 10) % 10;
	const third = Math.floor(c / 100) % 10;
	const fourth = Math.floor(c / 1000) % 10;
	const fifth = Math.floor(c / 10000) % 10;
	const sixth = Math.floor(c / 100000) % 10;
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
}, 10);
