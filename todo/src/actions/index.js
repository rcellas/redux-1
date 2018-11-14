let nextTodoId = 0


//en el type lo que hace es nos deja una huella de que ha pasado por allí

//agrega un texto
export const addTodo =(text)=>{
    return{
        type:'ADD_TODO',
        id: nextTodoId++,
        text
    }
}


//hace visible el texto
export const setVisibilityFilter=(filter)=>{
    return{
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

//
export const toggleTodo =(id)=>{
    return{
        type:'TOGGLE_TODO',
        id
    }
}