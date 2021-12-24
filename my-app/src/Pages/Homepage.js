import React, { Component } from 'react'
import { Host } from '../hostSetup'
import { Link } from 'react-router-dom'
import homeImg from "../Media/homePic.jpg"

export default class Home extends Component {
    render() {
        if (this.context.accommodations.length === 0) this.context.fetchAccommodations()
        return (
            <div className="homePage">
                <div className="homePageHeader">
                    <img src={homeImg} alt="landscape" />
                    <h1 className="homePageTitleHeader">Chez vous, partout et ailleurs</h1>
                </div>
                {this.context.accommodations.length &&
                    <div className="homePageList">
                        {this.context.accommodations.map((item) => (
                            <Link to={`/hostElements/${item.id}`} key={item.id} state={item}>
                                <div className="card">
                                    <div className="cardPicture">
                                        <img src={item.cover} alt={item.title} />
                                    </div>
                                    <div className="headerCard">
                                        {item.title}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        )
    }
}
Home.contextType = Host