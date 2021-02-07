import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import { VinylsList } from "./components/VinylsList";
import { AuthorsList } from "./components/AuthorsList";
import { VinylDetails } from "./components/VinylDetails";
import { WavyHeader } from "./components/WavyHeader";
import "./style.css";

export function App() {
	return (
		<div>
			<Router>
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
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

function HomePage() {
	function redirectTo(path) {
		console.log(path);
		return <Redirect to={path} />;
	}

	return (
		<div className="content">
			<div className="row">
				<div className="col col-md-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">
								<Link to="/vinyls"> vinili </Link>
							</h5>
							<p className="card-text">
								Qui puoi vedere la lista di tutti i vinili
								registrati nei nostri server
							</p>
						</div>
					</div>
				</div>
				<div className="col col-md-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">
								<Link to="/authors"> autori </Link>
							</h5>
							<p className="card-text">
								In quest'altra sezione è possibile visualizzare
								tutti gli artisti che abbiamo registrato
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col col-md-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">
								<Link to="/vinyls"> vinili </Link>
							</h5>
							<p className="card-text"></p>
						</div>
					</div>
				</div>
				<div className="col col-md-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">
								<Link to="/authors"> autori </Link>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
