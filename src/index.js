/*
* @Author: yangxiooping
* @Date:   2017-09-05 17:04:30
* @Last Modified by:   yangxiooping
* @Last Modified time: 2017-09-05 17:08:56
*/

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello, webpack';
    return element;
}
document.body.appendChild(component());