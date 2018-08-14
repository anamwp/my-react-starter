import React from 'react';

class FormControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'Please write an eassy about your favourite DOM Element '
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        });
    }
    handleSubmit(e){
        alert('A eassy was submitted: ' + this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        Eassy
                        <textarea  value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>

            </div>

        )
    }
}
export default FormControl;