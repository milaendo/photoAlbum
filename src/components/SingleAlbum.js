import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPhotos} from '../actions/photoActs'


class SingleAlbum extends Component {
	static defaultProps={
		photos:[],
		albums:[]
	}

	componentWillMount(){
		getPhotos()
	}
	render () {
		console.log('name',this.props.photos)
		return (
			<div>
			<div className='header'>
				<h1>Single Album {this.props.match.params.id}</h1>
			</div>
			<div>
				<div className='photos'>
					{this.props.photos.map(data => (
						<div key={data.id}>
							<img src={data.url} alt=''/>
							<div>{data.name}</div>
						</div>
					))}
				</div>
			</div>
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

export default connect(stateToProps)(SingleAlbum)