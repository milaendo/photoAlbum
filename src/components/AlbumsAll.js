import React, { Component } from 'react'
import {connect} from 'react-redux'
import getData from '../actions/photoActs'
import {Link} from 'react-router-dom'
import { Header } from 'semantic-ui-react'


class AlbumsAll extends Component {

	componentWillMount(){
		getData()
	}
	render () {
		return (
			<div className='mainContain'>
			<Header as='h3' block className='white'>
				All Albums
			</Header>
				<div className='secondWrap'>
				<div className='albumWrap'>	
					{this.props.albums.map(data => (
						<div key={data.id} className='albumIndi'>
							<Link to={'/SingleAlbum/' + data.id}><img src={data.coverphoto} alt='' /></Link>
							<Header  className='white'>{data.name}</Header>
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