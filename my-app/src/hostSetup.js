import React from "react";

export const Host = React.createContext()

export default class HostProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accommodations: [],
        }
    }

    fetchAccommodations = () => {
        try {
            fetch(process.env.PUBLIC_URL + '/API_File/data.json')
            .then((response => response.json()))
            .then(data => this.setState({accommodations: data}))
        } catch(error)  {
            console.log(error)
        }
    }

    render() {
        return (
            <Host.Provider value={{
                accommodations: this.state.accommodations,
                fetchAccommodations: this.fetchAccommodations,
            }}>
                {this.props.children}
            </Host.Provider>
        )
    }
}