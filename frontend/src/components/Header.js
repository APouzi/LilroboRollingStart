import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <nav className = 'navbar bg-primary'>
            <ul className='list'> <br />
            <h1 className=''>Lilrobo</h1>
                <li className = ''><Link to = '/'>Home</Link></li>
                <li><Link to = '/about'>About</Link></li>
                
            </ul>
        </nav>
    )
}

export default Header