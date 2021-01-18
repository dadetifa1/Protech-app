import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <section className="app-section full-height">
        <h1>Protech - app</h1>
        <h4>Never worry about losing a sales commission again</h4>
        <div id="menutop">
          <ul>
            <li>The ability to track each sale</li>
            <li>The ability show a report for each sales person (feature coming)</li>
            <li>The ability show a report for each Territory (feature coming)</li>
          </ul>
        </div>
        <Link to={'/collection'}>Enter Site</Link>
      </section>
    );
  }
}

export default Landing;
