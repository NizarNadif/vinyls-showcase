import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VinylsList } from "./components/VinylsList";
import { VinylDetails } from "./components/VinylDetails";
import "./style.css";

export function App() {
	return (
		<Router>
			<h1>titolo</h1>
			<Switch>
				<Route path="/vinyls/:id" component={VinylDetails} />
				<Route path="/vinyls">
					<VinylsList></VinylsList>
				</Route>
				<Route path="/authors">autori</Route>
				<Route path="/">home</Route>
			</Switch>
		</Router>
	);
}
