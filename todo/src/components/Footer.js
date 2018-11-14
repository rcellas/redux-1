import React from 'react';
import FilterLink from '../containers/FilterLink';


//información del footer
const Footer=()=>{
    <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            Todos
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Archivos
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETE">
            Completados
        </FilterLink>
    </p>
}


export default Footer;