import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

const Not_found = ( )=>{
    return(
        <div>
            <Header/>
            <h1>ERROR: 404 Page Not Found!</h1>
            <Link to="/">GO Back to The Home Page</Link>
        </div>
    )
}

export default Not_found;