import React from 'react';

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>Water would boil</p>
    }else{
        return <p>Water would not boiled yet</p>
    }
}
const scaleName = {
    c: 'celsius',
    f: 'Fahrenhiet',
}
class TemperatureCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            temperature: e.target.value
        });
    }
    render(){
        const temperature = this.state.temperature ;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}: </legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}
export default TemperatureCalculator;