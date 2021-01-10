import React from 'react'
import Classes from './Spinner.module.css'
export default function Spinner() {
    return (
        <div className={Classes.lds_facebook}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
