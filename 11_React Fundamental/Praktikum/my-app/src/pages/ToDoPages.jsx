import React from 'react';
import Header from './componens/Header';
import Body from './componens/Body';

export default function ToDoPage({listApp}) {
    return (
        <>
            <Header text="To Do App"/>
            {listApp.map((list) => <Body list={list}/>)}
        </>
    )
}