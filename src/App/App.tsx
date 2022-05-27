import React, { useContext, useRef } from "react";
import {
	Container,
	ListGroup,
	ListGroupItem,
	InputGroup,
	FormControl,
	Button,
} from "react-bootstrap";
import { StoreContext } from "context/StoreContext";

const App = () => {
  const { complete, incomplete, markComplete, markIncomplete, deleteTodo } = useContext(StoreContext);

	const input = useRef<HTMLInputElement>(null);

	const renderList = (type: "Complete" | "Incomplete") => {
		const looper = type === "Complete" ? complete : incomplete;
		return (
			<ListGroup variant="flush" className="m-2">
				<h3>{type}</h3>
				{looper.map((todo, index) => {
					return (
						<ListGroupItem
							key={index}
							variant={type === "Complete" ? "success" : "danger"}
							style={{ display: "flex", justifyContent: "space-between" }}
						>
							<div>{todo}</div>
							<div>
								<i
									className={`fas fa-${
										type === "Complete" ? "minus" : "check"
									} m-2`}
                  style={{ cursor: "pointer" }}
									onClick={() => {
										type === "Complete"
											? markIncomplete(todo)
											: markComplete(todo);
									}}
								></i>
								<i
									className="fas fa-trash m-2"
                  style={{ cursor: "pointer" }}
									onClick={() => deleteTodo(todo)}
								></i>
							</div>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);
	};

	const addTodo = () => {
		if (input.current) {
			const val = input.current.value;
			input.current.value = "";
			markIncomplete(val);
		}
	};

	return (
		<Container>
			<InputGroup className="m-3">
				<FormControl placeholder="Todo" ref={input} />
					<Button variant="secondary" onClick={() => addTodo()}>
						{/* <i className="fas fa-plus mr-3"></i> */}
						Add
					</Button>
			</InputGroup>
			{renderList("Incomplete")}
			{renderList("Complete")}
		</Container>
	);
};

export default App;
