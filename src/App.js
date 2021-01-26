import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VinylsList } from "./components/VinylsList";
import { AuthorsList } from "./components/AuthorsList";
import { VinylDetails } from "./components/VinylDetails";
import "./style.css";

export function App() {
	return (
		<Router>
			<h1>titolo</h1>
			<Switch>
				<Route path="/vinyls/:id" component={VinylDetails} />
				<Route path="/vinyls">
					<h1> Elenco dei vinili </h1>
					<VinylsList />
				</Route>
				<Route path="/authors">
					<h1> Elenco degli autori </h1>
					<AuthorsList />
				</Route>
				<Route path="/">home</Route>
			</Switch>
		</Router>
	);
}
