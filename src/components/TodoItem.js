import React from "react";

function TodoItem(props) {
	return (
		<li>
			<p>
				{ props.text }
				{ ReturnStringIfPropsCompleted(props) }
			</p>
		</li>
		);
	}

	function ReturnStringIfPropsCompleted (props) {
		if (props.completed === true) {
			return " Completado";
		} else {
			return " No completado";
		}
	}

export { TodoItem };
