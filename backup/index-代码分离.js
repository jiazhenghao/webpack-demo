//起步的index.js
// import _ from 'lodash';

// function component() {
//     var element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());


function getComponent() {
    return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;

    }).catch(error => 'An error occurred while loading the component');
}


getComponent().then(component => {
    document.body.appendChild(component);
})