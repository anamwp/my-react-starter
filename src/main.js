// import notify from './Notification';
import {notify} from './Notification';
import {log} from './Notification';
import book from './Notification';
import React from 'react';
import {render} from 'react-dom';

notify('Hello another notify');
log('I am log message');

book.author('Rework - martin');
book.publisher('Jason fried');
class Form{
    constructor(){
        alert('I am a constructor');
    }

}
new Form();
class HelloReact extends React.Component{
    render(){
    return (<div id="hello-react">Hello React</div>);
    }
}
render(<HelloReact />, document.getElementById('app'));