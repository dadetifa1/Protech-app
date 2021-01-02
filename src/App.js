import React from 'react';
import Landing from './Landing/Landing'
import SalesCollection from './SalesCollection/SalesCollection'
import Header from './Header/Header'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './footer/Footer'
import SaleEntry from './SalesEntry/SaleEntry'
import './App.css'

function App() {
  return (
    <main className='App'>
        <Nav />

        <Route exact 
          path='/' 
          component={Landing} />

        <Route exact 
          path='/collection' 
          component={SalesCollection} />

        <Route exact 
          path='/salesentry' 
          component={SaleEntry} />

        <Footer />
    </main>
  );
}

export default App;