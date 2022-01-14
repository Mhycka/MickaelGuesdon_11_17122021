import React from "react";

export const HostsContext = React.createContext()

export default class HostContext extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hosts: [],
        }
    }

    
    fetchHosts = () => {
        try {
            fetch(process.env.PUBLIC_URL + '/api/data.json')
            .then((response => response.json()))
            .then(data => this.setState({hosts: data}))
        } catch(error)  {
            console.log(error)
        }
    }

    render() {
        return (
            <HostContext.Provider value={{
                hosts: this.state.hosts,
                fetchHosts: this.fetchHosts,
            }}>
                {this.props.children}
            </HostContext.Provider>
        )
    }
}