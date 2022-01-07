import { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HostProvider from './hostSetup'
import AboutUs from './Pages/AboutUs'
import ErrorPage from './Pages/ErrorPage'
import HostItem from './Pages/hosts'
import Home from './Pages/Homepage'
import './App.scss'


export default class App extends Component {
    render() {
        return (
            <HostProvider>
                <Router>
                    <Header/>
                    <main className="main">
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/hostElements/:id" exact element={<HostItem />} />
                        <Route path="/about-us" exact element={<AboutUs />} />
                        <Route path="/404" exact element={<ErrorPage/>} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>  
                    </main>
                    <Footer/>
                </Router>
            </HostProvider>
        )
    }
}