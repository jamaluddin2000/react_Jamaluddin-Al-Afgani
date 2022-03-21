import {Link } from "react-router-dom"
import AboutTheApp from "./componen/AboutTheApp"
import AboutTheAuthor from "./componen/AboutTheAuthor"
import Home from './Home'
import '../App.css';


export default function About(){

    return(
        <selection>
            <ul className='list-about'> 
                <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/about/about-app">
                <li>About App</li>
                </Link>

                <Link to="/about/about-author">
                <li>About Author</li>
                </Link>
            </ul>
        </selection>
    )
}