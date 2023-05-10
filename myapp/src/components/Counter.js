import React from 'react';

export default class Counter extends React.Component {
    state = {
        count : 0
    }

    componentDidMount(){

        setInterval(() => {
            this.setState((state) => {
                return {
                    count : state.count + this.props.incrementBy
                }
            })
        }, this.props.incrementInterval)
    }

    render() {
        return <>
                <h1>Count: {this.state.count}</h1>
                </>
    }
}