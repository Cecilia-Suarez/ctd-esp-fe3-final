export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME':
            return {}
        //OPCIONALES:    
        case 'GET_CHARACTER': //obtener el detalle
            return {...state, dentistDetail: action.payload}
        case 'DELETE_FAV':
            return {}
    }
}