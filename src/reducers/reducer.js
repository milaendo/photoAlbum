const initialState={
	albums:[]
}

export default function (state=initialState, action){
	switch(action.type){
		case 'SHOW_DATA':
			return {...state, albums: action.data}
		default: return state 
	}
}