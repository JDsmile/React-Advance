import React from "react";  

class CounterClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }

    increaseCount = ()=>{
        this.setState({
            counter:this.state.counter +1
        })
    }


    decreaseCount = ()=>{
        this.setState({
            counter:this.state.counter -1
        })
    }


    render(){
        return(
            <>
            <p>Class Componenet</p>
            <section className="container">
                
                <button onClick={this.increaseCount}>+</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.decreaseCount}>-</button>
            </section>
            </>
        )

    }
} export default CounterClass