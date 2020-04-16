

import React from 'react';
import ReactHowler from 'react-howler'
import Heading from '../../components/Heading'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: false
		}
		this.toggleTune = this.toggleTune.bind(this);
	}

	componentDidMount() {

	}

	toggleTune(){
		this.setState({playing: !this.state.playing})
	}
	hus(){

    var recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "tr-TR";

    recognition.onresult = function (event) {
        console.log(event)
    }
    recognition.start();
}

	render() {

		return (
			<div className="home-container">
				<Heading title="Husistant" />
				<Heading title="Husistant" />
				<Heading title="Husistant" />
				<button onClick={() => this.toggleTune()}>
					Toggle Tune
				</button>
				<button onClick={() => this.hus()}>
					hus
				</button>
				<ReactHowler
					html5
					preload
					src='./audio/iyibende.mp3'
					playing={this.state.playing}
				/>
				
			</div>
		);
	}
}



