/*
* @Author: yangxiooping
* @Date:   2017-09-05 17:04:30
* @Last Modified by:   yangxiooping
* @Last Modified time: 2017-09-06 17:57:49
*/

import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {hello} from './style.css';

class Hello extends Component{
  render() {
    return (
      <div className={hello}>
        Hello, webpack123
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));