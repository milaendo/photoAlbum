import React, { Component } from 'react'
import {connect} from ''
class AlbumsAll extends Component {

	render () {
		return (
			<div className='albumNav'>
				<h1>My Albums</h1>
			<div className='albumWrap'>
		<ul>
				{data.map(data => {
					<li>{data.id}</li>
				})}
		</ul>
			</div>
			</div>
		)
	}
}

export default AlbumsAll