import {Link } from "react-router-dom"

export default function AboutTheApp(){
    return(
        
        <>
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

        <h1>About The App</h1>
        <p> ipsum dolor sit amet consectetur</p>
        </>
    )
}