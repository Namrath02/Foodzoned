import * as React from 'react';

export default function Dashboard(){
    return (
        <div><h1>Hello {localStorage.getItem('vname')}</h1></div>
    )
}