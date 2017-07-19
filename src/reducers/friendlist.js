import * as types from '../constants/ActionTypes'; //in modo da avere accesso ai tipi di azioni 
import omit from 'lodash/object/omit'; //vedi case types.DELETE_FRIEND
import assign from 'lodash/object/assign'; //vedi case types.STAR_FRIEND:
import mapValues from 'lodash/object/mapValues'; //vedi case types.STAR_FRIEND:
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
			const newId = state.friends[state.friends.length-1] + 1; // Al primo friend aggiunto friends[2] + 1 = 3+1= 4 
			return {
				fiends: state.friends.concat(newId), //aggiungi all'array friends il valore newId [1,2,3,4] (al primo firend aggiunto)
				friendsById: {
					...state.friendsById, //aggiungo a friendsById esistente il nuovo friend ...state.friendById copio l'intero valore friendById [CONCATENAZIONE]
					[newId] : {
						id: newId,
						name: action.name 
					}
				}
			}
		case types.DELETE_FRIEND: //delete friend riceve l'id del friend da rimuovere (vedi l'action)
			return {
				...state,
				friends: state.friends.filter(id => id !== action.id), //filtra tutti gli id diversi da quelli di action.id ritorna id se diverso da quello della action (https://stackoverflow.com/questions/32040396/how-to-use-es6-fat-arrow-to-filter-an-array-of-objects)
				friendsById: omit(state.friendsById, action.id) //utilizziamo la funzione omit della libreria lodash, elimina l'entry con quell'id
			}
		case types.STAR_FRIEND:
		  return {
			...state, //carico il mio stato precedente prevState
			friendsById: mapValues(state.friendsById, (friend) => { //crea un nuovo oggetto friend con chiavi uguali a friendsById e valore uguale al return della funzione 
			  return friend.id === action.id ? //se ho l'id dell'azione
				assign({}, friend, { starred: !friend.starred }) : //assegno all'oggetto vuoto {} il valore di friend che mi sono copiato (sovrascrivo friend) più un nuovo attributo
				friend //altrimenti lo lascio invariato
			})
		  }
		
		default:
			return state;
	}
}
