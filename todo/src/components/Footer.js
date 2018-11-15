import React from 'react';
import FilterLink from '../container/FilterLink';
import {VisibilityFilters} from '../actions';

//información del footer
const Footer=()=>(
    <p>
        Show:<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilters-SHOW_COMPLETED}>Completed</FilterLink>
    </p>
)


export default Footer;