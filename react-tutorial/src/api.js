import React, { Component } from "react";

class Api extends Component {
    state = {
        data: {},
    }

    componentDidMount() {
        try {
            const url = 'https://economia.awesomeapi.com.br/json/daily/last/USD-BRL'

            fetch(url) 
                .then((result) => result.json())
                .then((result) => {
                    this.setState({
                        data: result,
                    })
                })
        } catch (error) {
            console.error
        }
    }

    render() {
        const {data} = this.state

        const result = (index) => {
            let moeda1 = data.USDBRL.code
            let moeda2 = data.USDBRL.codein
            let valor = data.USDBRL.ask

            return (
                <li key={index}>{moeda1} = 1</li>,
                <li key={index}>{moeda2} = {valor}</li>
            )
        }

        return <ul>{result}</ul>
    }
}

export default Api