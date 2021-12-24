import { Component } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Homepage'
import HostProvider from './hostSetup';
import HostItem from './Pages/hosts'
// import AboutUs from './Pages/AboutUs.js'
// import Error404 from './Pages/Error404.js'
import './App.scss'


export default class App extends Component {
    render() {
        return (
            <HostProvider>
                <Router>
                    <Header/>
                    <main className="main">
                        <Routes>
                            { <><Route path="/" exact element={<Home />} />
                            <Route path="/hostElements/:id" exact element={<HostItem />} /></> }
                        </Routes>
                    </main>
                    <Footer/>
                </Router>
            </HostProvider>
        )
    }
}