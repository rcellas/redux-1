import React, {PropTypes} from 'react';



const Todo =({ onClick,complete,text})=>(
    <li
        onClick={onClick}
        style={{
            textDecoration: complete ? 'line-through': 'none'
        }}
    >
        {text}

    </li>
)

Todo.propTypes={
    onClick:PropTypes.func.isRequired,
    complete:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
}

export default Todo;