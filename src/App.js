import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import MoodHome from "./components/MoodHome";
import Login from "./components/Login";
import Report from "./components/Report";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/MoodHome" component={MoodHome} />
				<Route path="/Report" component={Report} />
			</Switch>
		</div>
	);
}

export default App;
