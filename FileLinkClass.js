import React, { Component } from 'react';

import './App.css';

class FileLinkClass extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.action(e.target.value);
    }
    render() {
        return (
            <span style={{ color: 'grey' }}>Enter FileLink :

         <span style={{ color: 'black' }}> <input type="text" name="FileLink" onChange={this.handleChange}></input><br></br></span> </span>
        );
    }
}

export default FileLinkClass;