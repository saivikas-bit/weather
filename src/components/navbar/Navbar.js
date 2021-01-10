import React from 'react'
import Classes from './Navbar.module.css'
import firebase from 'firebase'

export default function Navbar() {
    return (
        <nav className={Classes.navbar}>
            <div className={Classes.logo}>Logo</div>
            <ul className={Classes.list}>
                <li><button onClick={() => firebase.auth().signOut()} className="btn btn-primary">Signout</button></li>
            </ul>
        </nav>
    )
}
