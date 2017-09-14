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
			<div className='main'>
				<div className='header'>
				<h1>Single Photo</h1>
				</div>
				<div className='photoWrap'>					
					{this.props.photos.map(item => (
						<div key={item.id} className='single'>
							<img id='singlePhoto'src={item.url} alt=''/>
							<div>{item.name}</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

function stateToProps(appState,compProps){
	return {
		albums: appState.albums,
		photos: appState.photos.filter(i => compProps.match.params.id == i.id)
	}
}

export default connect(stateToProps)(Photo)
