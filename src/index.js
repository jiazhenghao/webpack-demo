import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    console.log("111122333");
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    //- Lodash, currently included via a script, is required for this line to work
    //+ Lodash, now imported by this script
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //element.innerHTML = "hello webpack111";
    return element;
}

document.body.appendChild(component());