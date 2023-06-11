import React from "react";

function TodoItem(props) {
	return (
			<li>
				<p className="TodoItem">
					<span>❌</span>
					{ ReturnStringIfPropsCompleted(props) }
					{ props.text }
				</p>
			</li>
		);
	}

	function ReturnStringIfPropsCompleted (props) {
		if (props.completed === true) {
			return <span>✅</span>;
		} else {
			return <span key={props.index + ".icon"}>⏳</span>;
		}
	}

export { TodoItem };
