import React, { Component } from "react";
import Faces from "./Faces";
import MoodScore from "./Moodscore";

class MoodHome extends Component {
	constructor() {
		super();
		this.state = {
			moods: {
				sad: 0,
				notSoSad: 0,
				ok: 0,
				better: 0,
				good: 0
			},
			message: "",
			score: false
		};
	}

	maths = value => {
		switch (value) {
			case "sad":
				return 1;
			case "notSoSad":
				return 3;
			case "ok":
				return 5;
			case "better":
				return 7;
			case "good":
				return 10;
			default:
				return "No button exists";
		}
	};

	clickHandler = event => {
		event.preventDefault();
		this.setState({
			moods: {
				...this.state.moods,
				[event.target.name]: this.maths(event.target.name)
			},
			score: true
		});
	};

	onChangeHandler = event => {
		this.setState({ message: event.target.value });
	};

	render() {
		return (
			<div>
				<h2>MoodHome</h2>

				{this.state.score ? (
					<MoodScore message={this.onChangeHandler} />
				) : (
					<Faces state={this.state} click={this.clickHandler} />
				)}
			</div>
		);
	}
}

export default MoodHome;
