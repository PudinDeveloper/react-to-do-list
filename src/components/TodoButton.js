import React from "react";
import "./css/TodoButton.css";

function TodoButton(props) {
	return(
		<div className="container">
			<button className="TodoButton">{props.children}</button>
		</div>
	);
}

export { TodoButton };
