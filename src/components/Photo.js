import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPhotos} from '../actions/photoActs'

class Photo extends Component {
	static defaultprops={
		photos:[]
	}
	componentWillMount(){
		getPhotos()
	}
	render () {
		return (
			<div>{this.props.match.params.id}
				<h1>Single Photo</h1>
				{console.log('props',this.props)}
				{console.log('diff')}
			</div>
		)
	}
}

function stateToProps(appState,compProps){
	return {
		albums: appState.albums,
		photos: appState.photos.filter(i => compProps.match.params.id == i.albumId)
	}
}

export default connect(stateToProps)(Photo)
