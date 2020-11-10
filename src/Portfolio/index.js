import React from 'react'
import './index.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Portfolio = () => {
  return (
    <BrowserRouter>
      <div className='container portfolio__container'>
        <div className='row portfolio__row'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>
          <div className='col-lg-9 portfolio__main-content'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={About} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/projects' component={Projects} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Portfolio
