import * as types from '../constants/ActionTypes'; //in modo da avere accesso ai tipi di azioni 
const initialState = {
	frineds: [1,2,3],
	friendsById : {
		 1: {
			id: 1,
			name: 'Pippo Duster'
		 },
		 2: {
			id: 2,
			name: 'Pluto Stepway'
		 },
		 3: {
			id: 3,
			name: 'Paperino Sandero'
		 }
		}
};

export default function friends(state = initialState, action) { 
	switch (action.types) {
		
		case types.ADD_FRIEND :
			//mi serve un indice per aggiungere un elemento all'array friends
			const newID = state.friends[state.friends.length-1] + 1; // Al primo friend aggiunto friends[2] + 1 = 3+1= 4 
	}
}

