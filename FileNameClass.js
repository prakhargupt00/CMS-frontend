import React, { Component } from 'react';

import './App.css';

class FileNameClass extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.action(e.target.value);
    }
    render() {
        return (
            <span style={{ color: 'grey' }}>Enter FileName :

         <span style={{ color: 'black' }}> <input type="text" name="FileName" onChange={this.handleChange}></input><br></br></span> </span>
        );
    }
}

export default FileNameClass;