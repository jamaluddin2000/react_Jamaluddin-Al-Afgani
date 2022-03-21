import '../App.css';
import {Link } from "react-router-dom"


export default function Navbar(){
    return(
        <nav>
            <h2>Logo</h2>
            <ul className='nav-link'>
                <Link  to="/">
                <li>Home</li>
                </Link>

                <Link to="/about">
                <li>About</li>
                </Link>            
            </ul>

        </nav>
    )
}