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
        <div >
            <h1>About The Author</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam velit quos ducimus omnis similique maxime ab rerum placeat? Optio maiores, repellendus expedita accusamus dolores modi sequi accusantium cumque magnam!</p>
        </div>
        </>
    )
}