import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {
    return (
        <Router>
            <container fluid>  
                <Header />         
                <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/github" component={Github} /> 
                <Route exact path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </container>


        </Router>
    );
}

export default App;