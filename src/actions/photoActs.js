import store from '../store'

export function getData(){
	fetch('http://localhost:3001/albums')
	.then(response => {return response.json()})
	.then(data => {
		console.log(data)
		store.dispatch({
			type:'SHOW_DATA',
			data: data
		})
		})
	})
}