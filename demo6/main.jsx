import React from 'react'
import ReactDOM from 'react-dom'
import style from './app.css'

ReactDOM.render(
    <div>
        <h1 className={style.h1}>hello name</h1>
        <h2 className='h2'>hello webpack</h2>
    </div>,
    document.getElementById('demo')
)