/* el export nos permite que podamos usar la acción en otras partes del codigo*/

/* En hasErrored y IsLoading tenemos 2 action creators: bool (true/false) como argumentos y devuelven un objeto con un significado type
 y el bool asignado a la propiedad*/
export function itemsHasErrored(bool){
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrorred: bool
    };
}

export function itemsIsLoading(bool){
    return{
        type:'ITEMS_IS_LOADING',
        isLoading: bool
    };
}


/* aquí lo que haremos es llamar a los datos que se hayan recuperado con exito, todos los datos pasan por la parte de items.
Con ES6 lo que es devolver un objecto con la propiedad llamada items y devuelve la array de items */
export function itemsFetchDataSuccess(items){
    return{
        type:'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}


export function errorAfterFiveSeconds(){
    //devuelve la función en lugar de una action object
    return(dispatch)=>{
        setTimeout(()=>{
            //funcion que envia a otros action creators
            dispatch(itemsHasErrored(true)); 
        }, 5000);
    };
}

export function itemsFetchData(url){
    return (dispatch)=>{
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response)=>{
                if (!response.ok){
                    throw Error (response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response)=>response.json())
            .then((items)=>dispatch(itemsFetchDataSuccess(items)))
            .catch(()=>dispatch(itemsHasErrored(true)));
    };
}