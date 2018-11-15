import React from 'react';
import PropTypes from 'prop-types';

const Link =({active,children,onClick})=>{
    if(active){
        return <span>{children}</span>
    }

    return(
        //poner link para el href
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"
            onClick={e=> {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}


Link.propTypes ={
    active: PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Link;