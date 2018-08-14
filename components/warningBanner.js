import React from 'react';
import LoginControl from './loginControl.js';

function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return(
        <div className="warning">
            <LoginControl />
        </div>
    );
}
class Page extends React.Component{
    constructor (props){
        super(props);
        this.state={
            showWarning: true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState(prevState => ({
            showWarning : !prevState.showWarning
        }));
    }
    render(){
        return(
            <div>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                <WarningBanner warn={this.state.showWarning} />

            </div>
        )
    }
}

export default Page;