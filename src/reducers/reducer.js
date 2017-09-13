const initialState={
	albums:[],
	photos:[]
}

export default function (state=initialState, action){
	switch(action.type){
		case 'SHOW_DATA':
			return {...state, albums: action.data}
		case 'GET_PHOTO':
			return{...state, photos: action.photos}
		default: return state 
	}
}