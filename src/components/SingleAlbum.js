import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPhotos} from '../actions/photoActs'
import {Link} from 'react-router-dom'


class SingleAlbum extends Component {
	static defaultProps={
		photos:[],
		albums:[]
	}

	componentWillMount(){
		getPhotos()
	}
	render () {
		return (
			<div className='fullWrap'>
			<div className='nav'>
			{this.props.albums.map(items => (
				<Link to={/SingleAlbum/ + items.id} key={items.id}><div className='navLink'>{items.name}</div></Link>
			
			))}
			</div>
			<div className='mainContain'>
			<div className='header'>
					<h1>Single Album {this.props.match.params.id}</h1>
			</div>
				<div>
					<div className='photos'>
						{this.props.photos.map(data => (
								<div key={data.id} className="photoIndi">
									<Link to ={/Photo/ + data.id}><img src={data.url} alt='' id='singleAlbum'/></Link>
									<div>{data.name}</div>
					</div>
						))}
				</div>
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