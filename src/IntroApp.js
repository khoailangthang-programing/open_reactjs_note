import React, { Component } from 'react'
import logo from './logo.svg'
import './IntroApp.css'

class IntroApp extends Component {
	render() {
		return (
			<div className="App">
	      <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <a
	          className="App-link"
	          href="https://reactjs.org"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	          This App Was Build By React
	        </a>
	      </header>
	    </div>
		)
	}
}

export default IntroApp;