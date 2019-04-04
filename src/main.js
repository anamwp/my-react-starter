import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
/**
 * import components
 */
import EventHandler from './../components/eventhandler';
import ShowComment from './../components/comment'
import Page from './../components/warningBanner';
import FormControl from './../components/formControl'
import TemperatureCalculator from './../components/temperatureCalculator'
import Projects from './../components/Projects'


ReactDOM.render(
    <Projects />,
    document.getElementById('app')
);
