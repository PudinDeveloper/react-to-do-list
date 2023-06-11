import React from "react";
import "./css/TodoItem.css";

function TodoItem(props) {
	return (
			<li>
				<p className="TodoItem">
					{ ReturnStringIfPropsCompleted(props) }
					{ props.text }
				</p>
			</li>
		);
	}

	function ReturnStringIfPropsCompleted (props) {
		if (props.completed === true) {
			return "✅ ";
		} else {
			return "⏳ ";
		}
	}

export { TodoItem };
