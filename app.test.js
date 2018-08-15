import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
setInterval(this.Cur_Time += 1, 100);
class App extends Component {
    constructor () {
        super();
        this.timer = setInterval(() => {
            this.setState({a:this.state.a + 1})
        }, 1000);
        this.state= {a:0};
        //this.setState({a:SetInterval(this.Cur_Time += 1, 1000)});
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.a}
                </p><br/>
                <button onClick = {() => clearInterval(this.timer)}>Стоп</button><br/>
                <button onClick = {() => this.timer = setInterval(() => {
                    this.setState({a:this.state.a + 1})
                }, 1000)
                }>Старт</button><br/>
                <button onClick = {() => this.setState({a:0})}>Очистить</button>
            </div>
        );
    }
}
export default App;