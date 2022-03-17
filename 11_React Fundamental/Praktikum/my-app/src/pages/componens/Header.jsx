import React from 'react'

export default function Header({text}) {
    return (
        <div style={{borderBottom : '4px solid #bbbbbb', paddingLeft : 20}}>
            <h1>{text}</h1>
        </div>
    )
}