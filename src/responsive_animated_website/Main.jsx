import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './main.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Navbar from './Navbar'
import Footer from './Footer'


const Main = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Service' component={Service} />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </>
    )
}

export default Main;