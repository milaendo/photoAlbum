import store from '../store'

export default function getData(){
	fetch('http://localhost:3001/albums')
	.then(response => {return response.json()})
	.then(data => {
		store.dispatch({
			type:'SHOW_DATA',
			data: data
		})
	})
}

export function getPhotos(){
	fetch('http://localhost:3001/photos')
	.then(response => {return response.json()})
	.then(photos => {
		store.dispatch({
			type:'GET_PHOTO',
			photos: photos
		})
	})
}

