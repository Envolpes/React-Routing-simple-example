import React from 'react'
import { Switch, Route } from 'react-router-dom'

// The Roster component matches one of two different routes
// depending on the full pathname
export default class Roster extends React.Component {
  render(){
	  return(
			<div>
		    <h1>Welcome to the roster!</h1>
		  </div>
		);
	}
}
