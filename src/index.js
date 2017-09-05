/*
* @Author: yangxiooping
* @Date:   2017-09-05 17:04:30
* @Last Modified by:   yangxiooping
* @Last Modified time: 2017-09-05 18:39:53
*/

import ReactDOM from 'react-dom';
import React, {Component} from 'react';

class Hello extends Component{
  render() {
    return (
      <div>
        Hello, webpack
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));