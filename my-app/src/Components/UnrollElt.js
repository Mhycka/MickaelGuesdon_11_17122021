import React, { Component } from 'react'
import chevronDownImg from "../Media/chevronTop.svg"

export default class UnrollELt extends Component {

    constructor({title, children}) {
        super()
        this.title = title
        this.children = children
        this.contentRef = null

        this.state = {
            show: false,
        }
    }

    toggleShow () {
        this.setState({
            show : !this.state.show
        })
    }


    getContentHeight () {
        return this.contentRef.scrollHeight;
    }

    render() {
        return (
            <div className={this.state.show ? 'accordion active' : 'accordion'}>
                <div 
                className="accordion-header"
                onClick={this.toggleShow.bind(this)}
                >
                    <span>{this.title}</span>
                    <img src={chevronDownImg} alt="Chevron" />
                </div>
                <div 
                className="accordion-content"
                ref={(ref) => this.contentRef = ref} 
                style={{height: this.state.show ? this.getContentHeight() : 0}}
                >
                    <div className="accordion-content-wrapper">{this.children}</div>
                </div>
            </div>
        )
    }
}