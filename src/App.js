
import './App.css';
import Users from "./components/Users";



import React, {Component} from 'react';
import Title from "./components/Title";

class App extends Component {
    state = {
        visible : false
    }
    render() {
        return (
            <div className='main_div'>
                <Title header = 'List of users' />
                {this.state.visible?<Users /> : null}
                <div className="button_wrapper">
                  <button className='button' onClick = {this.onClick}>
                      {this.state.visible ? "hide" : 'show'}
                  </button>
                </div>
            </div>
        );
    }
    onClick = () => {
        this.setState({visible : !this.state.visible})
    }
}

export default App;



