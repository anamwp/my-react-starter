import React from 'react';
import {render} from 'react-dom';

class HelloReact extends React.Component{
    render(){
        return (<div id="hello-react">Hello React</div>);
    }
}
render(<HelloReact />, document.getElementById('app'));