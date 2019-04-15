 import React from "react"
 import PropTypes from "prop-types"
 import {
   BrowserRouter as Router,
   Route,
   Switch,
 } from 'react-router-dom'

 import Bikes from './pages/Apartments'
 class AuthenticatedApp extends React.Component {
   render () {
     return (
       <Router>
         <div>
           <Switch>
             <Route path="/apartments" component={Apartments} />
           </Switch>
         </div>
       </Router>
     );
   }
 }

 export default AuthenticatedApp
