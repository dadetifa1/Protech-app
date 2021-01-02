import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

class Landing extends React.Component{
    render(){
        return(
            <section className="app-section">
                <h1>Protech - app</h1>
                <h4>Never worry about losing a sale's commission again</h4>
                <Link to={'/home'}>
                    Enter Site
                </Link>
            </section>
        );
    }
}

export default Landing;