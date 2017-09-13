import React, { Component } from 'react'
import {connect} from 'react-redux'
import getData from '../actions/photoActs'
import {Link} from 'react-router-dom'


class AlbumsAll extends Component {

	componentWillMount(){
		getData()
	}
	render () {
		return (
			<div className='mainContain'>
			<div className='albumNav'>
				<h1>My Albums</h1>
			</div>
			<div className='contain'>
				<div className='albumWrap'>	
					{this.props.albums.map(data => (
						<div key={data.id}>
							<Link to={'/SingleAlbum/' + data.id}><img src={data.coverphoto} alt='' /></Link>
							<p>{data.name}</p>
						</div>
					))}
				</div>
			</div>
			</div>
		)
	}
}

function stateToProps(appState){
	return {
		albums: appState.albums
	}
}

export default connect(stateToProps)(AlbumsAll)