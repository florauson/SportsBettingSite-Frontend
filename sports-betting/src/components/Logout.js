import React from 'react';
import { Link } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props){
        super(props)
        localStorage.clear();
    }
    render() {
        return (
            <div>
                <h1>You have been logged out !</h1>
                <Link to="/login">Login Again</Link>
            </div>
        )
    }
}

export default Logout;