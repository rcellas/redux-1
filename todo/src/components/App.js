import React from 'react';
import Footer from './Footer';
import AddTodo from '../container/AddTodo';
import VisibleTodoList from '../container/VisibleTodoList';

//muestra toda la app
const App=()=>(
    <div>
        <AddTodo/>
        <VisibleTodoList
            filter={URLSearchParams.filter || 'SHOW_ALL'}
        />
        <Footer/>
    </div>
)

export default App;