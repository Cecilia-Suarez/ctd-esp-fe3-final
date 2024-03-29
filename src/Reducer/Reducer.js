export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'ADD_FAV':
            return {}
        case 'CHANGE_THEME':
            return {}
        //OPCIONALES:    
        case 'GET-CHARACTER': //obtener el detalle
            return {}
        case 'DELETE_FAV':
            return {}
    }
}