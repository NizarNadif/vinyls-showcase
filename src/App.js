import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

export function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/">Hello world!</Route>
					<Route path="/vinyls">vinili!</Route>
					<Route path="/authors">autori!</Route>
					<Route path="/genres">generi!</Route>
				</Switch>
			</Router>
		</div>
	);
}
